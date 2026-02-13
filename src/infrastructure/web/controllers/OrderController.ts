import { Request, Response } from "express";
import { orderRepository } from "../../constainer.js";

export class OrderController {
    async getClientById( req: Request<{ clientId: string}>, res: Response) {
        const orders = await orderRepository.findByClientId(req.params.clientId);
        return res.json(orders)
    }
}


