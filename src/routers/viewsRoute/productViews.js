import { Router } from "express";
import * as productViewsController from "../../controllers/productController.js";
import { adminView, userView } from "../../middlewares/securityMidd.js";

const productViewsRoute = Router();

productViewsRoute.get("/home", userView, productViewsController.GETAllProducts);
productViewsRoute.get(
  "/formNewProduct",
  adminView,
  productViewsController.GETFormNewProduct
);
productViewsRoute.get(
  "/product",
  userView,
  productViewsController.GETDetailProduct
);
export default productViewsRoute;
