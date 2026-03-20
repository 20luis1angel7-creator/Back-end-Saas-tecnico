import { Expense } from "../../../domain/entities/Expense.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";
import { MaterialRepository } from "../../../domain/repositories/MaterialRepository.js";
export declare class RegisterMaterialPurchaseUseCase {
    private readonly expenseRepository;
    private readonly materialRepository;
    constructor(expenseRepository: ExpenseRepository, materialRepository: MaterialRepository);
    execute(materialId: string, quantity: number, companyId: string, description: string, date: Date): Promise<Expense>;
}
//# sourceMappingURL=RegisterMaterialPurchaseUseCase.d.ts.map