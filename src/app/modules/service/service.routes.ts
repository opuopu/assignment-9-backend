import express from "express";
import { ServiceController } from "./service.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();
router.post(
  "/",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceController.createAbuilding
);
router.get(
  "/",

  ServiceController.getAllBuildings
);
router.get(
  "/:id",

  ServiceController.getSingleBuilding
);
router.patch(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceController.updateBuilding
);
router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceController.deleteBuilding
);

export const serviceRoutes = router;
