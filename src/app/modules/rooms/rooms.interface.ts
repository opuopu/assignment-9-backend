import { Types } from "mongoose";
import { IUser } from "../user/user.interface";
import IServicInterface from "../service/service.interface";

type Iimage = {
  url: string;
  publicLink: string;
};

type IReviewAndRating = {
  rating: number;
  message: string;
  user: Types.ObjectId | IUser; // Replace IUser with the actual User interface if available
};
type IRoom = {
  title: string;
  images: Iimage[];
  facilities: string[];
  building: Types.ObjectId | IServicInterface; // Replace IService with the actual Service interface if available
  roomId?: string;
  forCheck: string;
  discount?: number;
  category: "delux" | "delux king" | "delux twin" | "3 bed";
  bedSize?: number;
  pricing?: number;
  roomSize?: string;
  description?: string;
  isBooked: boolean;
  reviewAndRatings: IReviewAndRating[];
};
export default IRoom;
