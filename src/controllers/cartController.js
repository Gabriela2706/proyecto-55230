import * as cartService from "../services/cartService.js";

export const getAllCarts = async (req, res) => {
  let allCarts = await cartService.getAllCarts();
  res.send(allCarts);
};

export const getCartById = async (req, res) => {
  const { cid } = req.params;
  const cartById = await cartService.getCartDetail(cid);

  res.send(cartById);
};

export const postCreateCart = async (req, res) => {
  const { products } = [];
  const newCart = await cartService.createCart(products);
  res.send(console.log(newCart));
};

export const postAddProductToCart = async (req, res) => {
  const { cid, pid } = req.params;
  const addproducts = await cartService.addProductToCart(cid, pid);
  res.send(addproducts);
};

export const putUpdateToCart = async (req, res) => {
  const { cid, pid } = req.params;
  const quantity = req.body;
  const changeQuantity = await cartService.updateProdQuantity(
    cid,
    pid,
    quantity
  );
  res.send(changeQuantity);
};
export const deleteOneProductToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const deleteFromCart = await cartService.deletePidOfCid(cid, pid);
    res.send(deleteFromCart);
  } catch (e) {
    console.log(e);
  }
};

export const deleteProductsToCart = async (req, res) => {
  const { cid } = req.params;
  const deleteCart = await cartService.deleteCart(cid);
  res.send(deleteCart);
};
