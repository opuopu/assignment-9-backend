"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
// import { validateRequest } from "../../middlewares/validateRequest";
// import { UserValidation } from "./user.validations";
// import { ENUM_USER_ROLE } from "../../../enums/user";
// import auth from "../../middlewares/auth";
const router = express_1.default.Router();
router.post("/signup", 
// validateRequest(UserValidation.create),
user_controller_1.UserController.createUser);
router.get("/", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.getAllUsers);
router.get("/my-profile/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.USER), 
// auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
user_controller_1.UserController.getSingleUser);
router.patch("/my-profile/:id", 
// validateRequest(UserValidation.update),
(0, auth_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.updateUser);
router.get("/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.USER), user_controller_1.UserController.getSingleUser);
router.delete("/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.deleteUser);
router.patch("/:id", 
// validateRequest(UserValidation.update),
(0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.updateUser);
router.patch("/manage-role/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.manageRole);
exports.UserRoutes = router;
