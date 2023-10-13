import { model, Schema } from "mongoose";

const RoomSchema = new Schema(
  {
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
      enum: ["delux", "delux king", "delux twin", "3 bed"],
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
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Room = model("room", RoomSchema);
export default Room;
