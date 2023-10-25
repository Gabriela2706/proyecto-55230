import CartDao from "../dao/mongo/cartDB.js";
import ProductDao from "../dao/mongo/productDB.js";
const productDao = new ProductDao();
const cartDao = new CartDao();

export const getAllCarts = async () => {
  try {
    const allCarts = await cartDao.find();
    //console.log(JSON.stringify(allCarts, null, "\t"));
    return allCarts;
  } catch (e) {
    res.status(404).send({ msg: e });
    return e;
  }
};

export const getCartDetail = async (cidCart) => {
  try {
    let cartDetail = await cartDao.findOne({ _id: cidCart });
    if (!cartDetail) return "Cart  Not Found";

    return JSON.stringify(cartDetail, null, "\t");
  } catch (e) {
    res.status(404).send({ msg: e });
    return e;
  }
};

export const createCart = async (cart) => {
  try {
    const newCart = await cartDao.create(cart);
    return newCart;
  } catch (e) {
    res.status(404).send({ msg: e });
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
    console.log("producto agregado!"); //Funciona, pero no se suman si tienen el mismo ID
  } catch (e) {
    res.status(404).send({ msg: e });
    return e;
  }
};
//NO SE SI SIRVE
export const updateProdQuantity = async (cidCart, pidProduct, quantity) => {
  try {
    // solo cambia la cantidad
    //Esta logica cambia la cantidad pasada por req.body
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
    res.status(404).send({ msg: e });
    return e;
  }
};

export const updateCartStock = async (products, cart) => {
  try {
    const update = await cartDao.updateCartProducts(products, cart);
    return update;
  } catch (e) {
    res.status(404).send({ msg: e });
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
    res.status(404).send({ msg: e });
    return e;
  }
};

export const deleteCart = async (cidCart) => {
  try {
    if (!cidCart) return "Cart not Found";
    let idCartDelete = await cartDao.findOne({ _id: cidCart });
    idCartDelete.products = [];
    await idCartDelete.save();

    return res.status(200).send({ error: false, msg: "Cart empty" });
  } catch (e) {
    res.status(404).send({ msg: e });
    return e;
  }
};
