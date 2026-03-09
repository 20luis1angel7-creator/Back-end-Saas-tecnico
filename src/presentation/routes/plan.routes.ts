import { Router } from "express";
import { PlanController } from "../controllers/PlanController.js";

const router = Router()
const controller = new PlanController


router.post("/plan", (req, res) => controller.create(req, res))

router.get("/plan/:id", (req, res) => controller.getPlanById(req, res))

router.get("/Companies/:companyId/plans", (req, res) => controller.listPlans(req, res))

router.patch("/plan/:id/deactivate", (req, res) => controller.deactivatePlan(req, res))

router.patch("/plan/:id/update", (req, res) => controller.updatePlan(req, res))


export default router;
