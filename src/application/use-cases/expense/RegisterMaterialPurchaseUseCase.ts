import { Expense } from "../../../domain/entities/Expense.js";
import { BusinessRuleError, NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";
import { randomUUID } from "node:crypto";



export class RegisterMaterialPurchaseUseCase{
    constructor(
        private readonly expenseRepository: ExpenseRepository,
        private readonly materialRepository: MaterialRepository
    ) {}

    async execute(materialId: string, quantity: number, description: string): Promise<Expense> {
        
        if (quantity <= 0) {
            throw new BusinessRuleError("Quantity must be greater than zero")
        }

        const material = await this.materialRepository.findById(materialId)

        if(!material) {
            throw new NotFoundError("Material not found")
        }

        const total = quantity * material.unitPrice
        
        material.updateStock(quantity)

        await this.materialRepository.save(material)

        const expenseMaterial = new Expense({
                id: randomUUID(),
                type: "MATERIAL",
                description: description,
                amount:total,
                createdAt: new Date()
            })

        await this.expenseRepository.save(expenseMaterial)

        return expenseMaterial
    }
}