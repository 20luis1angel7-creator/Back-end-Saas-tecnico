import { Expense } from "../entities/Expense.js";
export interface ExpenseRepository {
    save(expense: Expense): Promise<void>;
    findAll(): Promise<Expense[]>;
    findExpenseById(expenseId: string): Promise<Expense | null>;
}
//# sourceMappingURL=ExpenseRepository.d.ts.map