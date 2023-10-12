/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchasync";
import sendResponse from "../../../shared/sendResponse";
import { serviceServices } from "./service.service";

const createAbuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceServices.createBuilding(req.body);
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "service created  successfully",
    data: result,
  });
});
const getAllBuildings = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceServices.getAllBuildings();
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "service retrive  successfully",
    data: result,
  });
});

const getSingleBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceServices.getSingleBuilding(req.params.id);
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "service retrive  successfully",
    data: result,
  });
});
const updateBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceServices.updateBuilding(req.body, req.params.id);
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "service updated  successfully",
    data: result,
  });
});
const deleteBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceServices.deleteBuilding(req.params.id);
  sendResponse<any>(res, {
    statusCode: 200,
    success: true,
    message: "service deleted  successfully",
    data: result,
  });
});
export const ServiceController = {
  createAbuilding,
  getAllBuildings,
  getSingleBuilding,
  deleteBuilding,
  updateBuilding,
};
