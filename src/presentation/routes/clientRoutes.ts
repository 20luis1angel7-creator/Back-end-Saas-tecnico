import { Router } from "express";
import { ClientController } from "../controllers/ClientController.js";

const router = Router();
const controller = new ClientController();

//crear cliente
router.post("/", controller.create.bind(controller))
//listar cliente
router.get("/", controller.list.bind(controller))
//obtener cliente
router.get("/:id", controller.getById.bind(controller))
//actualizar cliente
router.put("/:id", controller.update.bind(controller))
//eliminar cliente
router.delete("/:id", controller.delete.bind(controller))
//activar cliente
router.patch("/:id/activate", controller.activate.bind(controller))
//suspender cliente
router.patch("/:id/suspend", controller.suspend.bind(controller))

