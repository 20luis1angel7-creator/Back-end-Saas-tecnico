import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
import { Order } from "../../../domain/entities/Order.js";



export class CancelOrderUseCase {
    constructor(private readonly orderRepository: OrderRepository) {}

    async execute(id: string): Promise<Order> {
        //buscar
        const order = await this.orderRepository.findById(id);
        //validar existencia
        if(!order) {
            throw new Error("Order not found");
        }
        //ejecutar metodo de entidad
        order.cancel();
        //guardar
        await this.orderRepository.save(order);
        //retornar
        return order;
    }
}



