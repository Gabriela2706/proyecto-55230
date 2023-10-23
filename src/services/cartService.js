import CartDao from "../dao/mongo/cartDB.js";
import CartDaoMemory from "../dao/memoria/cartMem.js";
import ProductDao from "../dao/mongo/productDB.js";
const cartDaoMemory = new CartDaoMemory();
const productDao = new ProductDao();
const cartDao = new CartDao();

export const getAllCarts = async () => {
  try {
    const allCarts = await cartDao.find();
    //console.log(JSON.stringify(allCarts, null, "\t"));
    return allCarts;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getCartDetail = async (cidCart) => {
  try {
    let cartDetail = await cartDao.findOne({ _id: cidCart });
    if (!cartDetail) return "Cart  Not Found";

    console.log(JSON.stringify(cartDetail, null, "\t"));
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const createCart = async (cart) => {
  try {
    const newCart = await cartDao.create(cart);
    return newCart;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const addProductToCart = async (cidCart, pidProduct) => {
  try {
    const idCart = await cartDao.findOne({ _id: cidCart });
    if (!idCart) return "Cart  Not Found";
    const idProduct = await productDao.findOne({ _id: pidProduct });
    if (!idProduct) return "Product Not Found";

    idCart.products.push({ product: idProduct });
    idCart.save();
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const updateProdQuantity = async (cidCart, pidProduct, quantity) => {
  try {
    const cart = await cartDao.findOne({ _id: cidCart });
    if (!cidCart) return "Cart  Not Found";
    const product = await productDao.findOne({ _id: pidProduct });
    if (!product) return "Product not Exist";

    cart.products.map((p) => {
      if (p.product._id == pidProduct) {
        p.quantity = quantity;
      }
      return p;
    });
    cart.save();
    return console.log("Update check!");
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const deletePidOfCid = async (cidCart, pidProduct) => {
  try {
    if (!cidCart) return "Cart not Found";
    if (!pidProduct) return "Product Not Found";
    return await cartDao.update(
      //ojo con esta logica que no se si esta correcta.
      { _id: cidCart },
      { $pull: { products: { product: pidProduct } } },
      { new: true }
    );
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const deleteCart = async (cidCart) => {
  if (!cidCart) return "Cart not Found";
  let idCartDelete = await cartDao.findOne({ _id: cidCart });
  idCartDelete.products = [];
  await idCartDelete.save();
  return console.log("cart empty");
};
