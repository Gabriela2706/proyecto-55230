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

  findOne = async ({ _id: id }) => {
    try {
      const oneCart = await cartModel.findOne({ _id: id });
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
  updateCartProducts = async (product, cart) => {
    try {
      cart.product = [...product];
      await cart.save();
    } catch (e) {
      console.log(e);
      return e;
    }
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
