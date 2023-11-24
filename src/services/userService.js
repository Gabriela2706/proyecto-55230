import UserDao from "../dao/mongo/userDB.js";
import bcrypt from "bcrypt";
const userDao = new UserDao();

export const getAllUsers = async () => {
  try {
    const allUsers = await userDao.find();
    //return allUsers.map((user) => users(user));// no funciona el DTO
    return allUsers;
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};

export const getUserByID = async (id) => {
  try {
    const oneUser = await userDao.findOne({ _id: id });
    if (!oneUser) return `User not found`;
    return oneUser.toObject();
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};
export const addNewUser = async (user) => {
  try {
    //const userDTO = new UsersDTO(user);
    //name, lastName, email, password, role
    console.log(user);
    user.role = user.email == "admincoder@coder.com" ? "admin" : "visit";
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const createUser = await userDao.create(user);

    return createUser.toObject();
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};

export const loginUser = async (email, password) => {
  try {
    console.log(`${email}, parametro leido desde el service`);
    const oneUser = await userDao.findOne(email);
    console.log(`${email}, leido despues del findOne del service`);
    if (!oneUser) return false;
    const newLogin = await bcrypt.compare(password, oneUser.password);

    return newLogin ? oneUser : false;
  } catch (e) {
    console.log(e.message);
  }
};

export const userExists = async (email) => {
  try {
    const user = await userDao.findOne({ email });
    if (user) return console.log("Existing email");
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};

export const idUserExists = async (id) => {
  try {
    const idExist = await userDao.findOne(id);
    if (idExist) return false;
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};
