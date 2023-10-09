import UserDao from "../dao/mongo/userDB.js";
import bcrypt from "bcrypt";

const userDao = new UserDao();

export const getAllUsers = async () => {
  try {
    const allUsers = await userDao.find();
    return allUsers;
  } catch (e) {
    console.log(e.message);
  }
};

export const getUserByID = async (id) => {
  try {
    const oneUser = await userDao.findOne(id);
    if (!oneUser) return `User not found`;
    return oneUser;
  } catch (e) {
    console.log(e.message);
  }
};
export const addNewUser = async (user) => {
  try {
    //name, lastName, email, password, role
    user.role = user.email == "admincoder@coder.com" ? "admin" : "visit";
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const createUser = await userDao.create(user);

    return createUser;
  } catch (e) {
    console.log(e.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await userDao.findOne({ email });
    if (!user) return false;
    const newLogin = await bcrypt.compare(password, user.password);

    return newLogin ? user.toObject() : false;
  } catch (e) {
    console.log(e.message);
  }
};

export const userExists = async (email) => {
  try {
    const user = await userDao.findOne({ email });
    if (user) return console.log("Existing email");
  } catch (e) {
    console.log(e.message);
  }
};

export const idUserExists = async (id) => {
  try {
    const idExist = await userDao.findOne(id);
    if (idExist) return false;
  } catch (e) {
    console.log(e.message);
  }
};
