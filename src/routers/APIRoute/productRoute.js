import { Router } from "express";
import * as productController from "../../controllers/productController.js";
import { adminView } from "../../middlewares/securityMidd.js";
const productRoute = Router();

productRoute.get("/", productController.GETAllProducts);
productRoute.get("/:pid", productController.GETProductById);
productRoute.post("/", adminView, productController.POSTAddNewProduct);
productRoute.put(
  "/:pid",
  adminView,
  productController.PUTUpdatePropertiesOfProd
);
productRoute.delete("/:pid", adminView, productController.DELETEProduct);

export default productRoute;
