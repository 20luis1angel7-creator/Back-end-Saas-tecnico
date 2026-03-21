import express  from "express";
import cors from "cors";
import clientRoutes from "./routes/client.Routes.js"
import orderRoutes from "./routes/order.routes.js";
import expenseRoutes from "./routes/expense.routes.js"
import planRoutes from "./routes/plan.routes.js"
import materialRoutes from "./routes/material.routes.js"



export function startServer() {
    //Aquí creas la aplicación principal. Piensa en app como el servidor completo.
    const app = express();

    app.use(cors(
        {origin: [
            "http://localhost:5173",
            "http://127.0.0.1:5173"
        ]}
    ));
    //"Cuando llegue una request con body en formato JSON, conviértelo automáticamente en un objeto JavaScript."
    app.use(express.json());
    //Todas las rutas definidas en clientRoutes tendrán el prefijo /clients.
    app.use("/clients", clientRoutes);
    app.use("/orders", orderRoutes);
    app.use("/expenses", expenseRoutes);
    app.use("/plans", planRoutes);
    app.use("/materials", materialRoutes);
    //Defines el puerto donde corre el servidor.
    const PORT = 3000;
    //Abre el servidor. Escucha en el puerto 3000. Ejecuta el callback cuando el servidor arranca
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    });
}



// programacon funcional vs orientado objeto
