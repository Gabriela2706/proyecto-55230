//import { Carts } from "../dto/cartsDTO.js";
import * as cartService from "../services/cartService.js";

export const getAllCarts = async (req, res) => {
  try {
    let allCarts = await cartService.getAllCarts();
    res.status(200).send({ error: false, allCarts });
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
    return e;
  }
};

export const getCartById = async (req, res) => {
  try {
    //const cartInfoFront = new Carts();
    const { cid } = req.params;
    const cartById = await cartService.getCartDetail(cid);

    res.status(200).send(cartById);
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
    return e;
  }
};

export const postCreateCart = async (req, res) => {
  try {
    const { products } = [];
    const newCart = await cartService.createCart(req.body);
    res.status(200).send(newCart);
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
    return e;
  }
};

export const postAddProductToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const addproducts = await cartService.addProductToCart(cid, pid);

    res.send(addproducts);
  } catch (e) {
    //res.status(404).send({ error: true, msg: e.message });
    res.send(e);
  }
};

export const putUpdateToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const quantity = req.body;
    const changeQuantity = await cartService.updateProdQuantity(
      cid,
      pid,
      quantity
    );

    res.status(200).send("Ok desde el controller");
  } catch (e) {
    res.send({ msg: "error desde el controller" });
    return e;
  }
};

export const deleteOneProductToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const deleteFromCart = await cartService.deletePidOfCid(cid, pid);
    res.status(200).send(deleteFromCart);
  } catch (e) {
    res.status(401).send({ error: true, error: e.message });
    return e;
  }
};

export const deleteProductsToCart = async (req, res) => {
  try {
    const { cid } = req.params;
    const deleteCart = await cartService.deleteCart(cid);
    res.status(200).send({ error: false, deleteCart });
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
    return e;
  }
};

export const POSTPurchase = async (req, res) => {
  try {
    //Cierre del proceso de compra
    const stockVerification = await cartService.stockVerification();
    res.status(200).send({ error: false, stockVerification });
  } catch (e) {
    res.status(401).send({ error: true, error: e.message });
    return e;
  }
};

//vistas
export const GETOneCart = async (req, res) => {
  try {
    const { cid } = req.params;
    let cart = await cartService.getCartDetail(cid);
    res.status(200).render(`cartDetail`, { oneCart: cart });
  } catch (e) {
    res.status(404).send({ error: true, error: e.message });
  }
};
