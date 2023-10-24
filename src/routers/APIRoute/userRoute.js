import { Router } from "express";
import * as userController from "../../controllers/userController.js";
import passport from "passport";
import { userView, adminView } from "../../middlewares/securityMidd.js";
const userRoute = Router();

userRoute.get(
  "/session/current",
  passport.authenticate("current", { session: false }),
  userView,
  userController.GETCurrent
);
userRoute.post(
  "/",
  passport.authenticate("login", {
    successRedirect: "/profile",
    failureMessage: "No se pudo realizar el ingreso correctamente",
  }),
  userController.POSTLoginStrategyLocal
);
userRoute.get("/profile", userController.GETViewProfile);
userRoute.post(
  "/register",
  passport.authenticate("register", {
    successRedirect: "/login",
    failureMessage: "No se pudo realizar el registro correctamente",
  }),
  adminView,
  userController.POSTRegisterStrategyLocal
);
userRoute.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
  userController.GETRedirectLoginGitHub
);
userRoute.get(
  "/authgithub",
  passport.authenticate("github", {
    successMessage: "Inicio de sesion Exitoso con GitHub",
    failureMessage: "Error de inicio",
    successRedirect: "/user/profile",
  }),
  userController.GETCallbackLoginGitHub
);

export default userRoute;
