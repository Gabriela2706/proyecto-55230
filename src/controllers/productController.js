import * as productService from "../services/productService.js";
import CustomError from "../utils/errors/customError.js";
import errors from "../utils/errors/errorDictionary.js";
import generateProducts from "../utils/generateProducts.js";
import errorNewProduct from "../utils/errors/generateErrors.js";

export const GETAllProducts = async (req, res) => {
  try {
    // const { limit = 10, page = 1, sort = 1, ...query } = req.query;
    // let products = await productService.getAllProducts.paginate(query, {
    //   limit: limit,
    //   lean: true,
    //   page: page,
    //   sort: { price: +sort },
    // });
    let products = await productService.getAllProducts();
    res.status(200).send({ error: false, products });
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
  }
};

export const GETProductById = async (req, res) => {
  try {
    const { pid } = req.params;
    let productWhitId = await productService.getProductById({ pid });

    res.status(200).send(productWhitId);
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
  }
};

export const POSTAddNewProduct = async (req, res) => {
  try {
    const product = req.body;
    if (!product) return;
    CustomError.createError({
      message:
        "Este es un error que se produce al intentar cargar un nuevo Producto",
      cause: errorNewProduct({ product }),
      name: "Error nuevo producto",
      code: errors.PRODUCT_ERROR,
    });

    const newProduct = await productService.addNewProduct(product);
    res.status(200).send({ error: false, newProduct });
  } catch (e) {
    res.status(401).send({ error: true }); //SI DEJO ESTE MSJ ME TOMA EL MENSAJE DEL CUSTOM. PERO NO CAE EN EL CUSTOM
  }
};

export const PUTUpdatePropertiesOfProd = async (req, res) => {
  try {
    const { id } = req.params;
    let update = req.body;
    const changes = await productService.updatePropertiesOfProd(id, update);
    res.status(200).send({ error: false, changes });
  } catch (e) {
    res.status(401).send({ error: true, error: e.message });
  }
};

export const DELETEProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let removeProduct = await productService.deleteProduct(id);
    res.status(200).send({ error: false, removeProduct });
  } catch (e) {
    res.status(401).send({ error: true, error: e.message });
  }
};

//Vistas
export const GETProducstHome = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).send(`home`, { prod: products });
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
  }
};

export const GETFormNewProduct = async (req, res) => {
  try {
    res.status(200).render(`formNewProduct`);
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
  }
};

export const GETDetailProduct = async (req, res) => {
  try {
    const detailProduct = await productService.getProductById(id);
    res.status(200).render(`products`, { prod: detailProduct });
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
  }
};

export const POSTMockingProducts = async (req, res) => {
  try {
    const productFaker = [];
    for (let p = 0; p < 10; p++) {
      productFaker.push(generateProducts());
    }
    res.send(productFaker);
  } catch (e) {
    res.status(404).send({ status: "Not found", error: e.message });
  }
};
