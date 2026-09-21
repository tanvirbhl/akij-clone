"use server";

import { connectToDatabase } from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getAllNewsletters() {
  try {
    await connectToDatabase();
    // Sort by Year descending, then createdAt descending
    const newsletters = await Newsletter.find().sort({ year: -1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(newsletters));
  } catch (error) {
    console.error("Failed to fetch newsletters:", error);
    return [];
  }
}

export async function createNewsletter(formData: FormData) {
  try {
    await connectToDatabase();

    const title = formData.get("title") as string;
    const month = formData.get("month") as string;
    const year = formData.get("year") as string;
    const description = formData.get("description") as string;
    const pdfFile = formData.get("pdfFile") as File;

    if (!pdfFile || pdfFile.size === 0) return { error: "A PDF file is required." };

    // Upload PDF to Cloudinary
    const arrayBuffer = await pdfFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const pdfUrl = await new Promise<string>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "akij_newsletters", resource_type: "auto" }, // "auto" is critical for PDFs
        (error, result) => {
          if (result) resolve(result.secure_url);
          else reject(error);
        }
      );
      uploadStream.end(buffer);
    });

    await Newsletter.create({ title, month, year, description, pdfFileUrl: pdfUrl });

    revalidatePath("/");
    revalidatePath("/admin/newsletters");
    return { success: true, message: "Newsletter published successfully!" };
  } catch (error: any) {
    return { error: "Failed to publish newsletter." };
  }
}

export async function updateNewsletter(id: string, formData: FormData) {
  try {
    await connectToDatabase();

    const title = formData.get("title") as string;
    const month = formData.get("month") as string;
    const year = formData.get("year") as string;
    const description = formData.get("description") as string;
    const pdfFile = formData.get("pdfFile") as File;

    let pdfUrl = undefined;

    if (pdfFile && pdfFile.size > 0) {
      const arrayBuffer = await pdfFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      pdfUrl = await new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "akij_newsletters", resource_type: "auto" },
          (error, result) => {
            if (result) resolve(result.secure_url);
            else reject(error);
          }
        );
        uploadStream.end(buffer);
      });
    }

    const updateData: any = { title, month, year, description };
    if (pdfUrl) updateData.pdfFileUrl = pdfUrl;

    await Newsletter.findByIdAndUpdate(id, updateData);

    revalidatePath("/");
    revalidatePath("/admin/newsletters");
    return { success: true, message: "Newsletter updated successfully!" };
  } catch (error: any) {
    return { error: "Failed to update newsletter." };
  }
}

export async function deleteNewsletter(id: string) {
  try {
    await connectToDatabase();
    await Newsletter.findByIdAndDelete(id);
    revalidatePath("/");
    revalidatePath("/admin/newsletters");
    return { success: true, message: "Newsletter deleted." };
  } catch (error) {
    return { error: "Failed to delete newsletter." };
  }
}