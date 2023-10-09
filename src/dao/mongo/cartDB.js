import cartModel from "../../schemas/cartSchema.js";

export default class CartDao {
  constructor() {}

  //CRUD
  find = async () => {
    return await cartModel.find();
  };

  findOne = async (id) => {
    const oneCart = await cartModel.findOne(id);
    return oneCart;
  };

  create = async (cart) => {
    const newCart = await cartModel.create(cart);
    return newCart;
  };

  update = async (data) => {
    const updateCart = await cartModel.findOneAndUpdate(data);
    return updateCart;
  };

  delete = async (id) => {
    const deleteCart = await cartModel.deleteOne(id);
    return deleteCart;
  };
}
