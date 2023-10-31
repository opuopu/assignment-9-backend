import { Schema, model } from "mongoose";
import IFeedback from "./feedback.interface";

const feedBackSchema = new Schema<IFeedback>(
  {
    email: {
      type: String,
    },
    feedback: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
export const Feedback = model<IFeedback>("feedback", feedBackSchema);
