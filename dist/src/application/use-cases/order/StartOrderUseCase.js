import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class StartOrderUseCase {
    orderRepository;
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(id) {
        const order = await this.orderRepository.findById(id);
        if (!order) {
            throw new NotFoundError("Order not found");
        }
        order.start();
        await this.orderRepository.save(order);
        return order;
    }
}
//# sourceMappingURL=StartOrderUseCase.js.map