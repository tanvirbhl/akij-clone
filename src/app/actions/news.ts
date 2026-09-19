"use server";

import { connectToDatabase } from "@/lib/mongodb";
import News from "@/models/News";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function createNewsArticle(formData: FormData) {
  try {
    await connectToDatabase();

    // 1. Extract data from form
    const title = formData.get("title") as string;
    const subTitle = formData.get("subTitle") as string;
    const excerpt = formData.get("excerpt") as string;
    const date = formData.get("date") as string;
    const link = formData.get("link") as string;
    const isFeatured = formData.get("isFeatured") === "on";
    const imageFile = formData.get("image") as File;

    if (!imageFile || imageFile.size === 0) {
      return { error: "An image is required." };
    }

    // 2. Upload Image to Cloudinary via Buffer Stream
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const imageUrl = await new Promise<string>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "akij_news" }, // Cloudinary folder name
        (error, result) => {
          if (result) resolve(result.secure_url);
          else reject(error);
        }
      );
      uploadStream.end(buffer);
    });

    // 3. Save to MongoDB
    // If this is set to featured, un-feature all others first
    if (isFeatured) {
      await News.updateMany({}, { isFeatured: false });
    }

    const newArticle = await News.create({
      title,
      subTitle,
      excerpt,
      date,
      link,
      isFeatured,
      image: imageUrl,
    });

    // 4. Clear Next.js cache so the frontend updates immediately
    revalidatePath("/");
    revalidatePath("/admin/news");

    return { success: true, message: "News article published successfully!" };
  } catch (error: any) {
    console.error("Error creating news:", error);
    return { error: "Failed to create news article. Please try again." };
  }
}

export async function getNews() {
  try {
    await connectToDatabase();
    
    // Fetch the single featured article
    const featured = await News.findOne({ isFeatured: true }).lean();
    
    // Fetch the 3 most recent non-featured articles
    const recent = await News.find({ isFeatured: false })
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    // Serialize MongoDB ObjectId and Dates to JSON-safe strings
    return {
      featuredNews: featured ? JSON.parse(JSON.stringify(featured)) : null,
      recentNews: JSON.parse(JSON.stringify(recent)),
    };
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return { featuredNews: null, recentNews: [] };
  }
}


export async function getAllAdminNews() {
  try {
    await connectToDatabase();
    // Fetch all news, newest first
    const news = await News.find().sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(news));
  } catch (error) {
    console.error("Failed to fetch admin news:", error);
    return [];
  }
}

export async function deleteNewsArticle(id: string) {
  try {
    await connectToDatabase();
    await News.findByIdAndDelete(id);
    
    revalidatePath("/");
    revalidatePath("/admin/news");
    return { success: true, message: "Article deleted successfully." };
  } catch (error) {
    console.error("Error deleting news:", error);
    return { error: "Failed to delete article." };
  }
}

export async function updateNewsArticle(id: string, formData: FormData) {
  try {
    await connectToDatabase();

    const title = formData.get("title") as string;
    const subTitle = formData.get("subTitle") as string;
    const excerpt = formData.get("excerpt") as string;
    const date = formData.get("date") as string;
    const link = formData.get("link") as string;
    const isFeatured = formData.get("isFeatured") === "on";
    const imageFile = formData.get("image") as File;

    let imageUrl = undefined;

    // Only upload a new image to Cloudinary if a file was selected during edit
    if (imageFile && imageFile.size > 0) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      imageUrl = await new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "akij_news" },
          (error, result) => {
            if (result) resolve(result.secure_url);
            else reject(error);
          }
        );
        uploadStream.end(buffer);
      });
    }

    // If setting to featured, un-feature all others first
    if (isFeatured) {
      await News.updateMany({}, { isFeatured: false });
    }

    const updateData: any = { title, subTitle, excerpt, date, link, isFeatured };
    if (imageUrl) updateData.image = imageUrl; // Only update image if a new one was uploaded

    await News.findByIdAndUpdate(id, updateData);

    revalidatePath("/");
    revalidatePath("/admin/news");

    return { success: true, message: "News article updated successfully!" };
  } catch (error: any) {
    console.error("Error updating news:", error);
    return { error: "Failed to update news article." };
  }
}