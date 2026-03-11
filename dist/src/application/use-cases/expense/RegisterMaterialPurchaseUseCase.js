import { Expense } from "../../../domain/entities/Expense.js";
import { BusinessRuleError, NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { randomUUID } from "node:crypto";
export class RegisterMaterialPurchaseUseCase {
    expenseRepository;
    materialRepository;
    constructor(expenseRepository, materialRepository) {
        this.expenseRepository = expenseRepository;
        this.materialRepository = materialRepository;
    }
    async execute(materialId, quantity, companyId, description, date) {
        if (quantity <= 0) {
            throw new BusinessRuleError("Quantity must be greater than zero");
        }
        const material = await this.materialRepository.findById(materialId);
        if (!material) {
            throw new NotFoundError("Material not found");
        }
        const total = quantity * material.unitPrice;
        material.updateStock(quantity);
        await this.materialRepository.save(material);
        const expenseMaterial = new Expense({
            id: randomUUID(),
            companyId: companyId,
            type: "MATERIAL",
            description: description,
            amount: total,
            date: date,
            createdAt: new Date()
        });
        await this.expenseRepository.save(expenseMaterial);
        return expenseMaterial;
    }
}
//# sourceMappingURL=RegisterMaterialPurchaseUseCase.js.map