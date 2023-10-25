import { Router } from "express";
import * as cartController from "../../controllers/cartController.js";
import { adminView, userView } from "../../middlewares/securityMidd.js";
const cartRoute = Router();

cartRoute.get("/", cartController.getAllCarts);
cartRoute.get("/:cid", cartController.getCartById);
cartRoute.post("/", cartController.postCreateCart);
cartRoute.post("/:cid/product/:pid", cartController.postAddProductToCart);
cartRoute.put("/:cid/product/:pid", cartController.putUpdateToCart);
cartRoute.delete("/:cid/product/:pid", cartController.deleteOneProductToCart);
cartRoute.delete("/:cid", cartController.deleteProductsToCart);

export default cartRoute;
