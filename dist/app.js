"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const NotFoundHandler_1 = require("./errors/NotFoundHandler");
exports.app = (0, express_1.default)();
//cors
exports.app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://booking-ideqevieu-opuopu.vercel.app",
        "https://dreamy-narwhal-1b29a1.netlify.app",
    ],
    credentials: true,
}));
//parser
exports.app.use((0, express_fileupload_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("wow server is working");
}));
//All Routes
exports.app.use("/api/v1", routes_1.default);
//Global Error Handler
exports.app.use(globalErrorHandler_1.default);
//handle not found
exports.app.use(NotFoundHandler_1.NotFoundHandler.handle);
