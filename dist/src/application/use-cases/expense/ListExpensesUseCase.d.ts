import { Expense } from "../../../domain/entities/Expense.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";
export declare class ListExpensesUseCase {
    private readonly expenseRepository;
    constructor(expenseRepository: ExpenseRepository);
    execute(): Promise<Expense[]>;
}
//# sourceMappingURL=ListExpensesUseCase.d.ts.map