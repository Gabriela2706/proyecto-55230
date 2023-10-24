import { Router } from "express";
import * as cartController from "../../controllers/cartController.js";
import { adminView, userView } from "../../middlewares/securityMidd.js";
const cartRoute = Router();

cartRoute.get("/", adminView, cartController.getAllCarts);
cartRoute.get("/:cid", cartController.getCartById);
cartRoute.post("/", userView, cartController.postCreateCart);
cartRoute.post(
  "/:cid/product/:pid",
  userView,
  cartController.postAddProductToCart
);
cartRoute.put("/:cid/product/:pid", userView, cartController.putUpdateToCart);
cartRoute.delete(
  "/:cid/product/:pid",
  userView,
  cartController.deleteOneProductToCart
);
cartRoute.delete("/:cid", userView, cartController.deleteProductsToCart);

export default cartRoute;
