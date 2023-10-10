import userModel from "../../schemas/userSchema.js";

export default class UserDao {
  constructor() {}

  //CRUD
  find = async () => {
    try {
      return await userModel.find();
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  findOne = async (id) => {
    try {
      const oneUser = await userModel.findOne(id);
      return oneUser;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  create = async (user) => {
    try {
      const newUser = await userModel.create(user);
      return newUser;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  update = async (data) => {
    try {
      const updateUser = await userModel.findOneAndUpdate(data);
      return updateUser;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  delete = async (id) => {
    try {
      const deleteUser = await userModel.deleteOne(id);
      return deleteUser;
    } catch (e) {
      console.log(e);
      return e;
    }
  };
}
