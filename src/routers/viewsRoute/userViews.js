import { Router } from "express";
import * as userViewsController from "../../controllers/userController.js";

const userViewsRoute = Router();

userViewsRoute.get("/login", userViewsController.GETViewLogin);
userViewsRoute.get("/register", userViewsController.GETViewRegister);
userViewsRoute.get("/profile", userViewsController.GETViewProfile);
userViewsRoute.get("/logout", userViewsController.GETLogout);
export default userViewsRoute;
