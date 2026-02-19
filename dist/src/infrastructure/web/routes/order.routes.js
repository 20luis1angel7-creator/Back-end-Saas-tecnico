import { Router } from "express";
import { OrderController } from "../controllers/OrderController.js";
const router = Router();
const controller = new OrderController();
router.get("/client/:clientId", controller.getClientById.bind(controller)); //Si no haces .bind(controller) a veces this puede romperse.
router.patch("/:id/complete", controller.complete.bind(controller));
router.patch("/:id/start", controller.start.bind(controller));
router.patch("/:id/cancel", controller.cancel.bind(controller));
export default router;
//# sourceMappingURL=order.routes.js.map