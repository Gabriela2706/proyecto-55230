import productModel from "../../schemas/productSchema.js";

export default class ProductDao {
  constructor() {}

  //CRUD
  find = async () => {
    try {
      console.log("llego");
      const products = await productModel.find();
      return products;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  findOne = async (id) => {
    const oneProduct = await productModel.findOne(id);
    return oneProduct;
  };

  create = async (product) => {
    const newProduct = await productModel.create(product);
    return newProduct;
  };

  update = async (update) => {
    const updatePropertiesOfProd = await productModel.findOneAndUpdate(update);
    return updatePropertiesOfProd;
  };

  delete = async (id) => {
    const deleteProduct = await productModel.findOneAndDelete(id);
    return deleteProduct;
  };
}
