/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SortOrder } from "mongoose";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IPaginationOptions } from "../../../interfaces/paginations";
import { ServiceSearchableFields } from "./service.constant";
import Service from "./service.model";
import { generateServiceCode } from "./service.utiles";

const createBuilding = async (payload: any): Promise<any> => {
  const code = await generateServiceCode();
  payload.code = code;
  const result = await Service.create(payload);
  return result;
};
// const getAllBuildings = async (filters: any): Promise<any> => {
//   const andConditions = [];
//   const { searchTerm, minPriceRange, maxPriceRange, roomType } = filters;
//   const filter: any = {};
//   if (searchTerm) {
//     ServiceSearchableFields.map((field) => {
//       filter.$or = filter.$or || [];
//       filter.$or.push({ [field]: { $regex: searchTerm, $options: "i" } });
//     });
//   }

//   // filtering based on pricerange and roomType

//   const result = await Service.find(filter).populate("rooms");
//   return result;
// };
const getAllBuildings = async (
  filters: any,
  paginationOptions: IPaginationOptions
): Promise<any> => {
  const { searchTerm, minPriceRange, maxPriceRange, roomType } = filters;
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  const aggregationPipeline = [];

  // Use $lookup at the beginning to populate "rooms"
  aggregationPipeline.push({
    $lookup: {
      from: "rooms",
      localField: "rooms",
      foreignField: "_id",
      as: "rooms",
    },
  });

  // Match services that match the search term
  if (searchTerm) {
    aggregationPipeline.push({
      $match: {
        $or: ServiceSearchableFields.map((field) => ({
          [field]: { $regex: searchTerm, $options: "i" },
        })),
      },
    });
  }

  if (minPriceRange) {
    aggregationPipeline.push({
      $match: {
        "rooms.pricing": {
          $gte: Number(minPriceRange),
        },
      },
    });
  }
  if (maxPriceRange) {
    aggregationPipeline.push({
      $match: {
        "rooms.pricing": {
          $lte: Number(maxPriceRange),
        },
      },
    });
  }

  if (roomType) {
    aggregationPipeline.push({
      $match: {
        "rooms.category": roomType,
      },
    });
  }
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const result = await Service.aggregate(aggregationPipeline)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  return {
    meta: {
      page,
      limit,
      total: result.length,
    },
    data: result,
  };
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
