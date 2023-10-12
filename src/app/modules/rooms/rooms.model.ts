import { model } from "mongoose";
import { Schema } from "mongoose";

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
const Room = model("room", RoomSchema);
export default Room;
