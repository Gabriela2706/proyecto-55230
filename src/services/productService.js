import ProductDao from "../dao/mongo/productDB.js";
const productDao = new ProductDao();

export const getAllProducts = async () => {
  try {
    const allProducts = await productDao.find();
    return allProducts;
  } catch (e) {
    console.log(e);
    return e;
  }
};
export const getProductById = async (id) => {
  try {
    const findProduct = await productDao.findOne(id);
    if (findProduct) {
      return findProduct;
    } else {
      return `Product with id: ${id} is not found in the list`;
    }
  } catch (e) {
    console.log(e.message);
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
    console.log(e.message);
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
    console.log(e);
  }
};
export const deleteProduct = async (id) => {
  try {
    await productDao.delete(id);
    return `Product successfully removed`;
  } catch (e) {
    console.log(e);
  }
};
