import { Router } from "express";
import * as cartViewsController from "../../controllers/cartController.js";
import { adminView, userView } from "../../middlewares/securityMidd.js";

const cartViewsRoute = Router();

export default cartViewsRoute;
