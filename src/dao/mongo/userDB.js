import userModel from "../../schemas/userSchema.js";

export default class UserDao {
  constructor() {}

  //CRUD
  find = async () => {
    return await userModel.find();
  };

  findOne = async (id) => {
    const oneUser = await userModel.findOne(id);
    return oneUser;
  };

  create = async (user) => {
    const newUser = await userModel.create(user);
    return newUser;
  };

  update = async (data) => {
    const updateUser = await userModel.findOneAndUpdate(data);
    return updateUser;
  };

  delete = async (id) => {
    const deleteUser = await userModel.deleteOne(id);
    return deleteUser;
  };
}
