import * as productService from "../services/productService.js";

export const GETAllProducts = async (req, res) => {
  try {
    const { limit = 10, page = 1, sort = 1, ...query } = req.query;
    let products = await productService.getAllProducts.paginate(query, {
      limit: limit,
      lean: true,
      page: page,
      sort: { price: +sort },
    });

    res.send(products);
  } catch (e) {
    res.send({ error: true });
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
    res.send({ error: true });
  }
};

export const PUTUpdatePropertiesOfProd = async (req, res) => {
  try {
    const { id } = req.params;
    let product = req.body;
    const changes = await productService.updatePropertiesOfProd(id, product);
    res.send(changes);
  } catch (e) {
    res.send({ error: true });
  }
};

export const DELETEProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let removeProduct = await productService.deleteProduct(id);
    res.send(removeProduct);
  } catch (e) {
    res.send({ error: true });
  }
};
