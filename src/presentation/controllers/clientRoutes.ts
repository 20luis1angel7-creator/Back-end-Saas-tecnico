//Router es una mini-aplicación de Express que permite: Definir endpoints. Agrupar rutas. Separar responsabilidades
import { Router } from "express";
import { ClientController } from "./ClientController.js";
//Aquí estás creando una instancia del router.
const router = Router();
//Creas una instancia del controller para poder usar sus métodos.
const controller = new ClientController();
//Se usa para crear un cliente..
router.post("/", (req, res) => controller.create(req, res))
//Devuelve todos los clientes.
router.get("/", (req, res) => controller.list(req, res));
//Se usa para obtener un cliente específico.
router.get("/:id", (req, res) => controller.getById(req, res));
//Elimina un cliente.
router.delete("/:id", (req, res) => controller.delete(req, res));
//Activa el cliente.
router.patch("/:id/activate", (req, res) => controller.activate(req, res));
//Suspende el cliente.
router.patch("/:id/suspend", (req, res)=>  controller.suspend(req, res));

router.put("/:id", (req, res) => controller.update(req, res));

//este archivo solo exporta una cosa principal: el router. "Lo más importante de este archivo es el router". Entonces lo exportas como default.
export default router;



