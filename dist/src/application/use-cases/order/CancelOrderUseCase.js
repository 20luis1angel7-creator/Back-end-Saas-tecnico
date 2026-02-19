import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class CancelOrderUseCase {
    orderRepository;
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(id) {
        //buscar
        const order = await this.orderRepository.findById(id);
        //validar existencia
        if (!order) {
            throw new NotFoundError("Order not found");
        }
        //ejecutar metodo de entidad
        order.cancel();
        //guardar
        await this.orderRepository.save(order);
        //retornar
        return order;
    }
}
//# sourceMappingURL=CancelOrderUseCase.js.map