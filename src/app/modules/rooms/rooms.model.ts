import { model } from "mongoose";
import { Schema } from "mongoose";
import { roomType } from "./rooms.constant";

const RoomSchema = new Schema({
  title: {
    type: String,
    required: true,
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
  building: {
    type: Schema.Types.ObjectId,
    ref: "service",
  },
  category: {
    type: String,
    enum: ["delux", "delux king", "delux twin"],
  },
  roomType: {
    type: String,
    enum: roomType,
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
const Room = model("room", RoomSchema);
export default Room;
