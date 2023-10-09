import * as userService from "../services/userService.js";
import { getAllProducts } from "../services/productService.js";
import { tokenGenerate } from "../config/jwt.js";

export const GETCurrent = async (req, res) => {
  try {
    res.send({ user: req.user });
  } catch (e) {
    res.send({ error: true });
  }
};

export const POSTLoginStrategyLocal = async (req, res) => {
  try {
    const ingreso = await userService.loginUser(
      req.body.email,
      req.body.password
    );

    if (!ingreso) return res.send({ error: true }); //Aca se genera el token
    const token = tokenGenerate({
      sub: ingreso._id,
      ingreso: { email: ingreso.email },
    });

    res.cookie("accessToken", token, {
      //Aca se guarda en una cookie
      maxAge: 12 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.send({ error: false, accessToken: token });
  } catch (e) {
    res.send({ error: true });
  }
};

export const POSTRegisterStrategyLocal = async (req, res) => {};
export const GETRedirectLoginGitHub = async (req, res) => {};
export const GETCallbackLoginGitHub = async (req, res) => {};
export const GETViewLogin = async (req, res) => {
  try {
    res.render(`login`);
  } catch (e) {
    res.send({ error: true });
  }
};

export const GETViewRegister = async (req, res) => {
  try {
    res.render(`register`);
  } catch (e) {
    res.send({ error: true });
  }
};
export const GETViewProfile = async (req, res) => {
  try {
    let products = await getAllProducts();
    res.render(`home`, { prod: products });
  } catch (e) {
    res.send({ error: true });
  }
};

export const GETLogout = async (req, res) => {
  try {
    req.session.destroy((e) => {
      res.render(`logout`);
    });
  } catch (e) {
    res.send({ error: true });
  }
};
