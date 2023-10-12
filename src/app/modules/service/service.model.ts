import { Schema, model } from "mongoose";
import { LocationEnum } from "../user/user.constants";

const ServiceSchema = new Schema({
  name: {
    type: String,
    require: [true, "name is required"],
  },
  location: {
    type: String,
    enum: LocationEnum,
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

  reviewAndRatings: [
    {
      rating: Number,
      enum: [0, 1, 2, 3, 4, 5],
    },
    {
      comments: {
        type: String,
      },
    },
  ],
  bookingStatus: {
    type: String,
    enum: ["pending", "approved", "canceled"],
    default: "pending",
  },
  rooms: [
    {
      type: Schema.Types.ObjectId,
      ref: "room",
    },
  ],
});

// room Schema
const RoomSchema = new Schema({
  title: {
    type: String,
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
  category: {
    type: String,
    enum: ["delux", "delux king", "delux twin"],
  },
  bedSize: {
    type: Number,
  },
  pricing: {
    type: Number,
  },
  roomSize: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Service = model("service", ServiceSchema);
export const Room = model("room", RoomSchema);

export default Service;
