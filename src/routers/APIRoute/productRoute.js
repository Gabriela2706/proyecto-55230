import { Router } from "express";
import * as productController from "../../controllers/productController.js";
const productRoute = Router();

productRoute.get("/", productController.GETAllProducts);
productRoute.get("/:pid", productController.GETProductById);
productRoute.post("/", productController.POSTAddNewProduct);
productRoute.put("/:pid", productController.PUTUpdatePropertiesOfProd);
productRoute.delete("/:pid", productController.DELETEProduct);

export default productRoute;
