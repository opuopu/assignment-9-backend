/* eslint-disable @typescript-eslint/no-explicit-any */
import Service from "./service.model";
import { generateServiceCode } from "./service.utiles";

const createBuilding = async (payload: any): Promise<any> => {
  const code = await generateServiceCode();
  payload.code = code;
  const result = await Service.create(payload);
  return result;
};
const getAllBuildings = async (): Promise<any> => {
  const result = await Service.find({}).populate("rooms");
  return result;
};
const getSingleBuilding = async (id: string): Promise<any> => {
  const result = await Service.findOne({ _id: id }).populate("rooms");
  return result;
};
const updateBuilding = async (payload: any, id: string): Promise<any> => {
  const result = await Service.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteBuilding = async (id: string): Promise<any> => {
  const result = await Service.findOneAndDelete({ _id: id });
  return result;
};

export const serviceServices = {
  createBuilding,
  getAllBuildings,
  getSingleBuilding,
  updateBuilding,
  deleteBuilding,
};
