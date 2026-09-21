import mongoose, { Schema, Document } from "mongoose";

export interface ISisterConcern extends Document {
  name: string;
  description: string;
  websiteLink: string;
  logoUrl: string;
}

const SisterConcernSchema = new Schema<ISisterConcern>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    websiteLink: { type: String, required: true },
    logoUrl: { type: String, required: true }, // Cloudinary Image URL
  },
  { timestamps: true }
);

export default mongoose.models.SisterConcern || mongoose.model<ISisterConcern>("SisterConcern", SisterConcernSchema);