import express  from "express";
import clientRoutes from "./routes/clientRoutes.js"
//Aquí creas la aplicación principal. Piensa en app como el servidor completo.
const app = express();
//"Cuando llegue una request con body en formato JSON, conviértelo automáticamente en un objeto JavaScript."
app.use(express.json());
//Todas las rutas definidas en clientRoutes tendrán el prefijo /clients.
app.use("/clients", clientRoutes);
//Defines el puerto donde corre el servidor.
const PORT = 5000;
//Abre el servidor. Escucha en el puerto 3000. Ejecuta el callback cuando el servidor arranca
app.listen(PORT, () => {
    console.log(`Server running on http:localhost:${PORT}`)
})



