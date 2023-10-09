import { Router } from "express";
import * as userController from "../../controllers/userController.js";
import passport from "passport";

const userRoute = Router();
userRoute.get("/session/current", userController.GETCurrent);
userRoute.post(
  "/login",
  passport.authenticate("login"),
  userController.POSTLoginStrategyLocal
);
userRoute.post("/register", userController.POSTRegisterStrategyLocal);
userRoute.get("/github", userController.GETRedirectLoginGitHub);
userRoute.get("/authgithub", userController.GETCallbackLoginGitHub);

export default userRoute;
