import { Router } from "express";
import { MaterialController } from "../controllers/MaterialController.js";

const router = Router()

const controller = new MaterialController()

router.post("/", (req, res) => controller.create(req, res))

router.get("/:id", (req, res) => controller.GetById(req, res))

router.get("/:companyId", (req, res) => controller.listmaterials(req, res))

router.patch("/:name/deactivate", (req, res) => controller.deactivate(req, res))

router.patch("/:name/update", (req, res) => controller.update(req, res))
