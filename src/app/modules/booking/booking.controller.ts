/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchasync";
import { bookingServices } from "./booking.service";
import sendResponse from "../../../shared/sendResponse";
import pick from "../../../shared/pick";
import paginationFields from "../../../constants/pagination";

const createAbooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.createAbooking(req.body, req.params.id);
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "booking created   successfully",
    data: result,
  });
});
const getallBooking = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);

  const result = await bookingServices.getallBooking(
    req.query,
    paginationOptions
  );
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "booking retrive  successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.getSingleBooking(req.params.id);
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "booking retrive  successfully",
    data: result,
  });
});
const updateBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.updateBooking(req.body, req.params.id);
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "booking updated  successfully",
    data: result,
  });
});
const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingServices.deleteBooking(req.params.id);
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "booking deleted  successfully",
    data: result,
  });
});
export const bookingControllers = {
  createAbooking,
  getallBooking,
  getSingleBooking,
  deleteBooking,
  updateBooking,
};
