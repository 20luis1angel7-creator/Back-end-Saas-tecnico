import { Expense } from "../../../domain/entities/Expense.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";
export declare class GetExpenseByIdUseCase {
    private readonly expenseRepository;
    constructor(expenseRepository: ExpenseRepository);
    execute(expenseId: string): Promise<Expense | null>;
}
//# sourceMappingURL=GetExpenseByIdUseCase.d.ts.map