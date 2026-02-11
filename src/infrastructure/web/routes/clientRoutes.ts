//Router es una mini-aplicación de Express que permite: Definir endpoints. Agrupar rutas. Separar responsabilidades
import { Router } from "express";
import { ClientController } from "../controllers/ClientController.js";
//Aquí estás creando una instancia del router.
const router = Router();
//Cuando llegue una petición POST a esta ruta, ejecutar ClientController.create.
router.post("/", ClientController.create)
//este archivo solo exporta una cosa principal: el router. "Lo más importante de este archivo es el router". Entonces lo exportas como default.
export default router;



