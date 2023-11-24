import express, { Application } from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import { Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import routes from "./app/routes";
import { NotFoundHandler } from "./errors/NotFoundHandler";

export const app: Application = express();
//cors
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://booking-ideqevieu-opuopu.vercel.app",
      "https://dreamy-narwhal-1b29a1.netlify.app",
      "https://booking-com-woad.vercel.app/",
    ],
    credentials: true,
  })
);

//parser
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  res.status(200).send("wow server is working");
});
//All Routes
app.use("/api/v1", routes);

//Global Error Handler
app.use(globalErrorHandler);

//handle not found
app.use(NotFoundHandler.handle);
