import productModel from "../../schemas/productSchema.js";

export default class ProductDao {
  constructor() {}

  //CRUD
  find = async () => {
    try {
      const products = await productModel.find();
      return products;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  findOne = async (id) => {
    try {
      const oneProduct = await productModel.findOne(id);
      return oneProduct;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  create = async (product) => {
    try {
      const newProduct = await productModel.create(product);
      return newProduct;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  update = async (update) => {
    try {
      const updatePropertiesOfProd = await productModel.findOneAndUpdate(
        update
      );
      return updatePropertiesOfProd;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  delete = async (id) => {
    try {
      const deleteProduct = await productModel.findOneAndDelete(id);
      return deleteProduct;
    } catch (e) {
      console.log(e);
      return e;
    }
  };
}
