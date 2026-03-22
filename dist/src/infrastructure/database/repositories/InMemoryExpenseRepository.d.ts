import { Expense } from "../../../domain/entities/Expense.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";
export declare class InMemoryExpenseRepository implements ExpenseRepository {
    private expenses;
    save(expense: Expense): Promise<void>;
    findAll(): Promise<Expense[]>;
    findExpenseById(expenseId: string): Promise<Expense | null>;
}
//# sourceMappingURL=InMemoryExpenseRepository.d.ts.map