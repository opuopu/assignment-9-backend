/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import ApiError from "../../../errors/Apierror";
import Service from "../service/service.model";
import Room from "./rooms.model";

const createAroom = async (payload: any, buildingId: string): Promise<any> => {
  const room = await Room.create(payload);
  if (!room) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "something went wrong. room not created"
    );
  }

  // Push the room's _id into the building's rooms array
  const updatedBuilding = await Service.findByIdAndUpdate(
    buildingId,
    {
      $push: { rooms: room._id },
    },
    { new: true }
  );
  if (!updatedBuilding) {
    throw new ApiError(httpStatus.BAD_REQUEST, "rooms not insert in buiding");
  }

  return room;
};
const getallRooms = async (): Promise<any> => {
  const result = await Room.find({});
  return result;
};
const getsingleRooms = async (id: string): Promise<any> => {
  const result = await Room.findOne({ _id: id });
  return result;
};
const updateRoom = async (payload: any, id: string): Promise<any> => {
  const result = await Room.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteRoom = async (id: string): Promise<any> => {
  const result = await Room.findOneAndDelete({ _id: id });
  return result;
};

export const roomservices = {
  createAroom,
  getallRooms,
  getsingleRooms,
  updateRoom,
  deleteRoom,
};
