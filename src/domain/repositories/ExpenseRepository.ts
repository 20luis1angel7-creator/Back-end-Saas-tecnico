import { Expense } from "../entities/Expense.js"


export interface ExpenseRepository {
    save(expense: Expense): Promise<void>
    findByCompanyId(id: string): Promise<Expense | null>
    findAll(): Promise<Expense[]>
    findExpenseById(expenseId: string): Promise<Expense | null>
}