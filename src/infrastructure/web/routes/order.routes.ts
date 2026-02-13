import { Router } from "express";
import { OrderController } from "../controllers/OrderController.js";

const router = Router();

const constroller = new OrderController();

router.get("/client/:clientId", constroller.getClientById.bind(constroller));//Si no haces .bind(controller) a veces this puede romperse.

export default router;









