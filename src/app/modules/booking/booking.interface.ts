import { Types } from "mongoose";
import { IUser } from "../user/user.interface";
import IRoom from "../rooms/rooms.interface";

type IBooking = {
  user: {
    name: string;
    email: string;
    phone: string;
    nidOrBirth: string;
  };
  userId: Types.ObjectId | IUser; // Replace IUser with the actual User interface if available
  room: Types.ObjectId | IRoom; // Replace IRoom with the actual Room interface if available
  totalFee: number;
  discount: number;
  checkInDate: string;
  checkOutDate: string;
  status: "pending" | "confirmed" | "cancelled" | "closed";
  progresStatus: "in progress" | "upcoming";
  payType: "bkash" | "nagad" | "card" | "cash";
  payStatus: "paid" | "unpaid";
  bookingNo?: string;
  forCheck: string;
  createdAt: Date;
  updatedAt: Date;
};

export default IBooking;
