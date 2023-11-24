import { Router } from "express";
import * as userController from "../../controllers/userController.js";
import passport from "passport";
import { userView, adminView } from "../../middlewares/securityMidd.js";
const userRoute = Router();

userRoute.get(
  "/session/current",
  passport.authenticate("current", { session: false }),
  userController.GETCurrent
);
userRoute.get("/login", userController.GETViewLogin);
userRoute.post(
  "/login",
  passport.authenticate("login", {
    successRedirect: "/api/users/profile",
    failureMessage: "No se pudo realizar el ingreso correctamente",
  }),
  userController.POSTLoginStrategyLocal
);
userRoute.get("/profile", userController.GETViewProfile);
userRoute.get("/register", userController.GETViewRegister);
userRoute.post(
  "/register",
  passport.authenticate("register", {
    successRedirect: "/api/users/login",
    failureMessage: "No se pudo realizar el registro correctamente",
  }),
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

//vistas

userRoute.get("/logout", userView, userController.GETLogout);
userRoute.get("/chat", userView, userController.GETChat);
export default userRoute;
