/* eslint-disable no-unused-expressions */
import Booking from "./booking.model";
import { generateBookingId } from "./booking.utiles";

/* eslint-disable @typescript-eslint/no-explicit-any */
const createAbooking = async (payload: any, id: string) => {
  const bookingNo = await generateBookingId();
  const { checkInDate, checkOutDate } = payload;
  const inDate = new Date(checkInDate).toISOString().split("T")[0];
  const outDate = new Date(checkOutDate).toISOString().split("T")[0];
  (payload.checkInDate = inDate), (payload.checkOutDate = outDate);
  payload.room = id;
  payload.bookingNo = bookingNo;
  const result = await Booking.create(payload);
  return result;
};

export const bookingServices = {
  createAbooking,
};
