import { Router } from "express";
import * as ticketController from "../../controllers/ticketController.js";
const ticketRoute = Router();

ticketRoute.get("/:code", ticketController.GETTickerByCode);
ticketRoute.post("/:cid/purchase", ticketController.POSTNewTicket);
