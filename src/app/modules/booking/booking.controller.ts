/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchasync";
import { bookingServices } from "./booking.service";
import sendResponse from "../../../shared/sendResponse";

const createAbooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.createAbooking(req.body, req.params.id);
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "booking created   successfully",
    data: result,
  });
});

export const bookingControllers = {
  createAbooking,
};
