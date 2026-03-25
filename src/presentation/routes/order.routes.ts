import { Router } from "express";
import { OrderController } from "../controllers/OrderController.js";

const router = Router();

const controller = new OrderController();

router.get("/:id", controller.getById.bind(controller));//Si no haces .bind(controller) a veces this puede romperse.

router.patch("/:id/complete", controller.complete.bind(controller));
router.patch("/:id/start", controller.start.bind(controller));

router.patch("/:id/cancel", controller.cancel.bind(controller))
router.get("/", controller.list.bind(controller))

router.post("/:id/material-usage", controller.registerMaterialUsage.bind(controller))


export default router;









