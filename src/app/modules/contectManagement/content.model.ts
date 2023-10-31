import { Schema, model } from "mongoose";
import { IAboutUs, IFaq, Iblog } from "./content.interface";

const BlogSchema = new Schema<Iblog>(
  {
    image: {
      url: String,
      public_id: String,
    },
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "desc is required"],
    },
  },
  {
    timestamps: true,
  }
);
const faqSchema = new Schema<IFaq>(
  {
    image: {
      url: String,
      publicLink: String,
    },
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "desc is required"],
    },
  },
  {
    timestamps: true,
  }
);
const AboutUsSchema = new Schema<IAboutUs>(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, " idesc required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<Iblog>("blog", BlogSchema);
export const Faq = model<IFaq>("faq", faqSchema);
export const AboutUs = model<IAboutUs>("about", AboutUsSchema);
