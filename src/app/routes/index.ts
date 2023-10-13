import express from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { AuthRoutes } from "../modules/auth/auth.route";
import { serviceRoutes } from "../modules/service/service.routes";
import { roomRoutes } from "../modules/rooms/rooms.routes";
import { bookingRouter } from "../modules/booking/booking.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/service",
    route: serviceRoutes,
  },
  {
    path: "/room",
    route: roomRoutes,
  },
  {
    path: "/booking",
    route: bookingRouter,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
