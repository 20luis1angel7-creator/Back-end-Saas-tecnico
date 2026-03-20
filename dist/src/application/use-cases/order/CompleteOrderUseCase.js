import { BusinessRuleError, NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class CompleteOrderUseCase {
    repository;
    materialRepository;
    orderMaterialUsageRepository;
    constructor(repository, materialRepository, orderMaterialUsageRepository) {
        this.repository = repository;
        this.materialRepository = materialRepository;
        this.orderMaterialUsageRepository = orderMaterialUsageRepository;
    }
    async execute(id) {
        const order = await this.repository.findById(id);
        if (!order) {
            throw new NotFoundError("Order not found");
        }
        const usages = await this.orderMaterialUsageRepository.findByOrderId(id);
        if (order.status === "COMPLETED") {
            throw new BusinessRuleError("Order already completed");
        }
        for (const usage of usages) {
            const material = await this.materialRepository.findById(usage.materialId);
            if (!material) {
                throw new NotFoundError("Material not found");
            }
            if (usage.quantity > material.stock) {
                throw new BusinessRuleError("Not enough stock to complete order");
            }
        }
        for (const usage of usages) {
            const material = await this.materialRepository.findById(usage.materialId);
            material.consume(usage.quantity);
            await this.materialRepository.save(material);
        }
        order.complete();
        await this.repository.save(order);
        return order;
    }
}
//# sourceMappingURL=CompleteOrderUseCase.js.map