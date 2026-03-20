import { Expense } from "../entities/Expense.js";
export interface ExpenseRepository {
    save(expense: Expense): Promise<void>;
    findByCompanyId(companyId: string): Promise<Expense[]>;
    findAll(): Promise<Expense[]>;
    findExpenseById(expenseId: string): Promise<Expense | null>;
}
//# sourceMappingURL=ExpenseRepository.d.ts.map