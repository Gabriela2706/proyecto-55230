import { Router } from "express";
import * as productController from "../../controllers/productController.js";
import { adminView } from "../../middlewares/securityMidd.js"; //midd para proteger las vistas
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
productRoute.post("/mockingProducts", productController.POSTMockingProducts);

export default productRoute;
