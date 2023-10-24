import cartModel from "../../schemas/cartSchema.js";

export default class CartDao {
  constructor() {}

  //CRUD
  find = async () => {
    try {
      return await cartModel.find();
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  findOne = async ({ id: _id }) => {
    try {
      const oneCart = await cartModel.findOne({ id: _id });
      return oneCart;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  create = async (cart) => {
    try {
      const newCart = await cartModel.create(cart);
      return newCart;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  update = async (data) => {
    try {
      const updateCart = await cartModel.findOneAndUpdate(data);
      return updateCart;
    } catch (e) {
      console.log(e);
      return e;
    }
  };
  updateProduct = async (product, cart) => {
    cart.product = [...product];
    await cart.save();
  };

  delete = async (id) => {
    try {
      const deleteCart = await cartModel.deleteOne(id);
      return deleteCart;
    } catch (e) {
      console.log(e);
      return e;
    }
  };
}
