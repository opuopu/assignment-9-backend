import express from "express";
import { bookingControllers } from "./booking.controller";
const router = express.Router();

router.post("/:id", bookingControllers.createAbooking);

export const bookingRouter = router;
