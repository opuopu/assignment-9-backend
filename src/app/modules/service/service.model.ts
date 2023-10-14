import { Schema, model } from "mongoose";
import { LocationEnum } from "./service.constant";

const ServiceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    code: {
      type: String,
    },
    forCheck: {
      type: String,
      default: "building",
    },
    location: {
      type: String,
      enum: LocationEnum,
      require: true,
    },
    category: {
      type: String,
      enum: ["1 star", "2 star", "3 star", "4 star", "5 star"],
    },
    images: [
      {
        image: String,
      },
    ],
    facilities: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },

    reviewAndRatings: [
      {
        rating: Number,
      },
      {
        comments: String,
      },
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
      },
    ],
    ratingLength: {
      type: Number,
    },

    minPriceRange: {
      type: String,
      default: 0,
    },
    maxPriceRange: {
      type: String,
      default: 0,
    },
    status: {
      type: String,
      enum: ["in progress", "upcoming"],
      default: "in progress",
    },
    comments: {
      type: String,
    },

    rooms: [
      {
        type: Schema.Types.ObjectId,
        ref: "room",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// room Schema

const Service = model("service", ServiceSchema);

export default Service;
