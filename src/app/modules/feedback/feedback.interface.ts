import { Types } from "mongoose";
import { IUser } from "../user/user.interface";

type IFeedback = {
  email?: string;
  feedback: string;
  user: Types.ObjectId | IUser;
};

export default IFeedback;
