import { Schema, model } from "mongoose";

const BookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "room",
    required: true,
  },
  checkInDate: {
    type: String,
    required: true,
  },
  checkOutDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
    default: "Pending",
  },
  totalFee: {
    type: Number,
  },
  payType: {
    type: String,
    enum: ["bkash", "nagad", "card", "cash"],
  },
  payStatus: {
    type: String,
    enum: ["paid", "unpaid"],
  },
});

const Booking = model("booking", BookingSchema);
export default Booking;
