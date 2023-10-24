import { Router } from "express";
import * as userViewsController from "../../controllers/userController.js";
import { userView } from "../../middlewares/securityMidd.js";

const userViewsRoute = Router();

userViewsRoute.get("/login", userViewsController.GETViewLogin);
userViewsRoute.get("/register", userViewsController.GETViewRegister);
userViewsRoute.get("/logout", userView, userViewsController.GETLogout);
userViewsRoute.get("/chat", userViewsController.GETChat);
export default userViewsRoute;
