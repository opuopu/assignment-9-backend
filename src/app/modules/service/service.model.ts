import { Schema, model } from "mongoose";
import { LocationEnum } from "./service.constant";

const ServiceSchema = new Schema({
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
      comments: {
        type: String,
      },
    },
  ],
  ratingLength: {
    type: Number,
  },

  rooms: [
    {
      type: Schema.Types.ObjectId,
      ref: "room",
    },
  ],
});

// room Schema

const Service = model("service", ServiceSchema);

export default Service;
