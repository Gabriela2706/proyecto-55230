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
    res.send(products);
  } catch (e) {
    res.send(e);
  }
};

export const GETProductById = async (req, res) => {
  try {
    const { id } = req.params;
    let productWhitId = await productService.getProductById(id);
    res.send(productWhitId);
  } catch (e) {
    res.send({ error: true });
  }
};

export const POSTAddNewProduct = async (req, res) => {
  try {
    const body = req.body;
    const newProduct = await productService.addNewProduct(body);
    res.send(newProduct);
  } catch (e) {
    res.send(e.message);
  }
};

export const PUTUpdatePropertiesOfProd = async (req, res) => {
  try {
    const { id } = req.params;
    let update = req.body;
    const changes = await productService.updatePropertiesOfProd(id, update);
    res.send(changes);
  } catch (e) {
    console.log(e);
  }
};

export const DELETEProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let removeProduct = await productService.deleteProduct(id);
    res.send(removeProduct);
  } catch (e) {
    console.log(e);
  }
};

//Vistas
export const GETProducstHome = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.send(`home`, { prod: products });
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};

export const GETFormNewProduct = async (req, res) => {
  try {
    res.render(`formNewProduct`);
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};

export const GETDetailProduct = async (req, res) => {
  try {
    const detailProduct = await productService.getProductById(id);
    res.render(`products`, { prod: detailProduct });
  } catch (e) {
    res.status(404).send({ error: true, msg: e });
  }
};
