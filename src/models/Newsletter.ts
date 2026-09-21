import mongoose, { Schema, Document } from "mongoose";

export interface INewsletter extends Document {
  title: string;
  month: string;
  year: string;
  description: string;
  pdfFileUrl: string;
}

const NewsletterSchema = new Schema<INewsletter>(
  {
    title: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    description: { type: String, required: true },
    pdfFileUrl: { type: String, required: true }, // Cloudinary PDF URL
  },
  { timestamps: true }
);

export default mongoose.models.Newsletter || mongoose.model<INewsletter>("Newsletter", NewsletterSchema);