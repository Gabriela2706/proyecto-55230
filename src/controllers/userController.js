import * as userService from "../services/userService.js";
import { getAllProducts } from "../services/productService.js";
import { tokenGenerate } from "../config/jwt.js";
import {
  UsersDTOResponseBack,
  UsersDTOResponseFront,
} from "../dto/usersDTO.js";

export const GETCurrent = async (req, res) => {
  //  NO FUNCIONA, SALE "Unauthorized"
  try {
    let userCurrent = await userService.getAllUsers();
    let userFront = new UsersDTOResponseFront(userCurrent);
    res.status(200).send(userFront);
  } catch (e) {
    res.send({ error: true, msg: e.message });
  }
};

export const POSTLoginStrategyLocal = async (req, res) => {
  try {
    const ingreso = await userService.loginUser(
      req.body.email,
      req.body.password
    );

    if (!ingreso) return res.send({ error: true });
    const token = tokenGenerate({
      //Aca se genera el token
      sub: ingreso._id,
      ingreso: { email: ingreso.email },
    });

    res.cookie("accessToken", token, {
      //Aca se guarda en una cookie
      maxAge: 12 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.send({ accessToken: token });
  } catch (e) {
    res.status(401).send({ error: true, error: e.message });
  }
};

export const POSTRegisterStrategyLocal = async (req, res) => {
  try {
    //const userDTO = new UsersDTO();
    console.log("aca en el controller");
    const { name, lastName, email, age, password } = req.body;
    const register = await userService.addNewUser({
      name,
      lastName,
      email,
      age,
      password,
    });
    res.status(200).send(register); // al back le mando la info del dto
  } catch (e) {
    res.status(401).send({ error: true, error: e.message });
  }
};
export const GETRedirectLoginGitHub = async (req, res) => {};
export const GETCallbackLoginGitHub = async (req, res) => {};
export const GETViewLogin = async (req, res) => {
  try {
    res.status(200).render(`login`);
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
  }
};

export const GETViewRegister = async (req, res) => {
  try {
    res.status(200).render(`register`);
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
  }
};
export const GETViewProfile = async (req, res) => {
  try {
    let products = await getAllProducts();
    res.status(200).render(`home`, { prod: products }); // a la vista profile le mando la info para el front y los productos disponibles.
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
  }
};
export const GETChat = async (req, res) => {
  try {
    res.status(200).render(`chat`);
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
  }
};

export const GETLogout = async (req, res) => {
  try {
    req.session.destroy((e) => {
      res.status(200).render(`logout`);
    });
  } catch (e) {
    res.send({ error: true });
  }
};
