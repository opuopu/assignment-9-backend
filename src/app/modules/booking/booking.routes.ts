import express from "express";
import { bookingControllers } from "./booking.controller";
const router = express.Router();

router.post("/:id", bookingControllers.createAbooking);
router.get("/", bookingControllers.getallBooking);
router.get("/:id", bookingControllers.getSingleBooking);
router.patch("/:id", bookingControllers.updateBooking);
router.delete("/:id", bookingControllers.deleteBooking);

export const bookingRouter = router;
