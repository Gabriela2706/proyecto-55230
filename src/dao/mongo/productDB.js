import productModel from "../../schemas/productSchema.js";

export default class ProductDao {
  constructor() {}

  //CRUD
  find = async () => {
    return await productModel.find();
  };

  findOne = async (id) => {
    const oneProduct = await productModel.findOne(id);
    return oneProduct;
  };

  create = async (product) => {
    const newProduct = await productModel.create(product);
    return newProduct;
  };

  update = async (data) => {
    const updatePropertiesOfProd = await productModel.findOneAndUpdate(data);
    return updatePropertiesOfProd;
  };

  delete = async (id) => {
    const deleteProduct = await productModel.deleteOne(id);
    return deleteProduct;
  };
}
