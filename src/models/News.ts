import mongoose, { Schema, Document } from "mongoose";

export interface INews extends Document {
  title: string;
  subTitle: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
  isFeatured: boolean;
}

const NewsSchema = new Schema<INews>(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    excerpt: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true }, // Will store the Cloudinary URL
    link: { type: String, required: true }, // e.g., /news/article-slug
    isFeatured: { type: Boolean, default: false }, // To highlight the main hero news
  },
  { timestamps: true }
);

export default mongoose.models.News || mongoose.model<INews>("News", NewsSchema);