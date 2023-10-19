"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutUsRoutes = exports.blogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const content_controller_1 = require("./content.controller");
exports.blogRoutes = express_1.default.Router();
exports.blogRoutes.post("/", content_controller_1.blogController.createBlog);
exports.blogRoutes.get("/", content_controller_1.blogController.getallblogs);
exports.blogRoutes.get("/:id", content_controller_1.blogController.getsingleBlogs);
exports.blogRoutes.patch("/:id", content_controller_1.blogController.updateBlogs);
exports.blogRoutes.delete("/:id", content_controller_1.blogController.deleteBlog);
exports.aboutUsRoutes = express_1.default.Router();
exports.aboutUsRoutes.post("/", content_controller_1.aboutUsController.createAboutUs);
exports.aboutUsRoutes.get("/", content_controller_1.aboutUsController.getAllAboutUs);
exports.aboutUsRoutes.get("/:category", content_controller_1.aboutUsController.getSingleAboutUs);
exports.aboutUsRoutes.patch("/:id", content_controller_1.aboutUsController.updateAboutUs);
exports.aboutUsRoutes.delete("/:id", content_controller_1.aboutUsController.deleteAboutUs);
