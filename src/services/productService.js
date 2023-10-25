import { ProductDao } from "../dao/index.js";
const productDao = new ProductDao();

export const getAllProducts = async () => {
  try {
    const allProducts = await productDao.find();
    return allProducts;
  } catch (e) {
    res.status(404).send({ msg: e });
    return e;
  }
};
export const getProductById = async (id) => {
  try {
    const findProduct = await productDao.findOne({ _id: id });
    if (!findProduct) {
      return `Product with id: ${id} is not found.`;
    }
  } catch (e) {
    res.status(404).send({ msg: e });
  }
};
export const addNewProduct = async (product) => {
  try {
    //onst { code } = product;
    // const validation = await productDao.findOne({ code: code });
    // if (validation) {
    //   return `Product with existing code: ${code}`;
    // }
    const newProduct = await productDao.create(product);
    return newProduct;
  } catch (e) {
    res.status(404).send({ msg: e });
  }
};
export const updatePropertiesOfProd = async (idUpdate, update) => {
  try {
    let productFound = await productDao.findOne(idUpdate);
    if (!productFound) {
      return `The product with id:${idUpdate} was not found.`;
    }
    await productDao.update(update);
    return `Product with changes made`;
  } catch (e) {
    res.status(404).send({ msg: e });
  }
};
export const deleteProduct = async (id) => {
  try {
    await productDao.delete(id);
    return `Product successfully removed`;
  } catch (e) {
    res.status(404).send({ msg: e });
  }
};
