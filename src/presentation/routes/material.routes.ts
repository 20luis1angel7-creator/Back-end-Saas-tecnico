import { Router } from "express";
import { MaterialController } from "../controllers/MaterialController.js";

const router = Router()

const controller = new MaterialController()

router.post("/", (req, res) => controller.create(req, res))

router.get("/:id", (req, res) => controller.getById(req, res))

router.get("/", (req, res) => controller.listmaterials(req, res))

router.patch("/:id/deactivate", (req, res) => controller.deactivate(req, res))

router.patch("/:id/update", (req, res) => controller.update(req, res))


export default router;