// import { Schema } from "mongoose";

export type IServicInterface = {
  name: string;
  code?: string;
  forCheck?: string;
  location: {
    type: string;
    enum: string;
  };
  locationInDetails: string;
  category: {
    type: string;
    enum: [
      "hotels",
      "apartments",
      "resorts",
      "villas",
      "vacationHome",
      "guestHouse",
    ];
  };
  description?: string;
  images: Array<{
    url: string;
    publicLink: string;
  }>;
  facilities: Array<string>;
  minPriceRange: number;
  maxPriceRange: number;

  status: {
    type: string;
    enum: ["in progress", "upcoming"];
  };
  comments?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rooms: Array<any>;
};

export default IServicInterface;
