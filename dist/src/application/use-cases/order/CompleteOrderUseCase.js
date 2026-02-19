import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class CompleteOrderUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const order = await this.repository.findById(id);
        if (!order) {
            throw new NotFoundError("Order not found");
        }
        order.complete();
        await this.repository.save(order);
        return order;
    }
}
//# sourceMappingURL=CompleteOrderUseCase.js.map