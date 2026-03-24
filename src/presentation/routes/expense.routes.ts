import { Router } from "express";
import { ExpenseController } from "../controllers/ExpenseController.js";





const router = Router()

const controller = new ExpenseController()

router.post("/", (req, res) => controller.create(req, res))

router.get("/:expenseId", (req, res) => controller.getExpenseById(req, res))

router.get("/", (req, res) => controller.listExpenses(req, res))

router.post("/material-purchase", (req, res) => controller.registerMaterialPurchase(req, res))

router.patch("/:expenseId", (req, res) => controller.update(req, res))

router.delete("/:expenseId", (req, res) => controller.delete(req, res))

export default router;