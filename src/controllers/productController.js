import * as productService from "../services/productService.js";

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
    res.status(404).send({ error: true, msg: e });
  }
};

export const GETProductById = async (req, res) => {
  try {
    const { id } = req.params;
    let productWhitId = await productService.getProductById(id);
    res.status(200).send({ error: false, productWhitId });
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};

export const POSTAddNewProduct = async (req, res) => {
  try {
    const body = req.body;
    const newProduct = await productService.addNewProduct(body);
    res.status(200).send({ error: false, newProduct });
  } catch (e) {
    res.status(401).send({ error: true, msg: e });
  }
};

export const PUTUpdatePropertiesOfProd = async (req, res) => {
  try {
    const { id } = req.params;
    let update = req.body;
    const changes = await productService.updatePropertiesOfProd(id, update);
    res.status(200).send({ error: false, changes });
  } catch (e) {
    res.status(401).send({ error: true, msg: e });
  }
};

export const DELETEProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let removeProduct = await productService.deleteProduct(id);
    res.status(200).send({ error: false, removeProduct });
  } catch (e) {
    res.status(401).send({ error: true, msg: e });
  }
};

//Vistas
export const GETProducstHome = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).send(`home`, { prod: products });
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};

export const GETFormNewProduct = async (req, res) => {
  try {
    res.status(200).render(`formNewProduct`);
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};

export const GETDetailProduct = async (req, res) => {
  try {
    const detailProduct = await productService.getProductById(id);
    res.status(200).render(`products`, { prod: detailProduct });
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};
