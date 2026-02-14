import { Request, Response } from "express";
import { orderRepository } from "../../constainer.js";
import { CompleteOrderUseCase } from "../../../application/use-cases/order/CompleteOrderUseCase.js";
import { StartOrderUseCase } from "../../../application/use-cases/order/StartOrderUseCase.js";
import { CancelOrderUseCase } from "../../../application/use-cases/order/CancelOrderUseCase.js";

export class OrderController {
    async getClientById( req: Request<{ clientId: string}>, res: Response) {
        try {
            const orders = await orderRepository.findByClientId(req.params.clientId);
            
            return res.json(orders);
        }catch(error:any){
            return res.status(400).json({ error: error.message });
        }
    }

    async start(req: Request<{id:string}>, res: Response) {

        try {
            const usecase = new StartOrderUseCase(orderRepository);
            const order = await usecase.execute(req.params.id);

            res.json(order);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
    
    async complete(req: Request<{id: string}>, res: Response) {
        try {
            const usecase = new CompleteOrderUseCase(orderRepository);
            const order = await usecase.execute(req.params.id);

            res.json(order);
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    async cancel(req: Request<{id: string}>, res: Response) {
        try {
            const usecase = new CancelOrderUseCase(orderRepository);
            const result = await usecase.execute(req.params.id)

            res.json(result);
            
        }catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }
    
}


