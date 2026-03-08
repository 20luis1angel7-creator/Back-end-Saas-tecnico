import { Router } from "express";
import { PaymentController } from "../controllers/PaymentController.js";



const router = Router()

const controller = new PaymentController

router.post("/payments", (req, res) => controller.pay(req, res))


export default router