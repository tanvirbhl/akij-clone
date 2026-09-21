"use server";

import { connectToDatabase } from "@/lib/mongodb";
import SisterConcern from "@/models/SisterConcern";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getAllSisterConcerns() {
  try {
    await connectToDatabase();
    const concerns = await SisterConcern.find().sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(concerns));
  } catch (error) {
    console.error("Failed to fetch sister concerns:", error);
    return [];
  }
}

export async function createSisterConcern(formData: FormData) {
  try {
    await connectToDatabase();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const websiteLink = formData.get("websiteLink") as string;
    const logoFile = formData.get("logo") as File;

    if (!logoFile || logoFile.size === 0) return { error: "A logo image is required." };

    const arrayBuffer = await logoFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const logoUrl = await new Promise<string>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "akij_brands" }, 
        (error, result) => {
          if (result) resolve(result.secure_url);
          else reject(error);
        }
      );
      uploadStream.end(buffer);
    });

    await SisterConcern.create({ name, description, websiteLink, logoUrl });

    revalidatePath("/");
    revalidatePath("/admin/sister-concerns");
    return { success: true, message: "Sister Concern added successfully!" };
  } catch (error: any) {
    return { error: "Failed to add Sister Concern." };
  }
}

export async function updateSisterConcern(id: string, formData: FormData) {
  try {
    await connectToDatabase();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const websiteLink = formData.get("websiteLink") as string;
    const logoFile = formData.get("logo") as File;

    let logoUrl = undefined;

    if (logoFile && logoFile.size > 0) {
      const arrayBuffer = await logoFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      logoUrl = await new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "akij_brands" },
          (error, result) => {
            if (result) resolve(result.secure_url);
            else reject(error);
          }
        );
        uploadStream.end(buffer);
      });
    }

    const updateData: any = { name, description, websiteLink };
    if (logoUrl) updateData.logoUrl = logoUrl;

    await SisterConcern.findByIdAndUpdate(id, updateData);

    revalidatePath("/");
    revalidatePath("/admin/sister-concerns");
    return { success: true, message: "Sister Concern updated successfully!" };
  } catch (error: any) {
    return { error: "Failed to update Sister Concern." };
  }
}

export async function deleteSisterConcern(id: string) {
  try {
    await connectToDatabase();
    await SisterConcern.findByIdAndDelete(id);
    revalidatePath("/");
    revalidatePath("/admin/sister-concerns");
    return { success: true, message: "Sister Concern deleted." };
  } catch (error) {
    return { error: "Failed to delete Sister Concern." };
  }
}