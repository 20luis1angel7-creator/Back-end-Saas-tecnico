import { Router } from "express";
import { PlanController } from "../controllers/PlanController.js";
const router = Router();
const controller = new PlanController;
router.post("/", (req, res) => controller.create(req, res));
router.get("/:id", (req, res) => controller.getPlanById(req, res));
router.get("/company/:companyId", (req, res) => controller.listPlans(req, res));
router.patch("/:id/deactivate", (req, res) => controller.deactivatePlan(req, res));
router.patch("/:id/update", (req, res) => controller.updatePlan(req, res));
export default router;
//# sourceMappingURL=plan.routes.js.map