import { Expense } from "../../../domain/entities/Expense.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";







export class InMemoryExpenseRepository implements ExpenseRepository {
    private expenses: Expense[] = []

    async save(expense: Expense): Promise<void> {
        const existingExpense = await this.expenses.findIndex(e => e.id === expense.id)

        if (existingExpense <= 0) {
            this.expenses[existingExpense] = expense
        } else {
            this.expenses.push(expense)
        }
    }

    async findAll(): Promise<Expense[]> {
        return this.expenses
    }

    async findByCompanyId(id: string): Promise<Expense | null> {
        return this.expenses.find(e => e.id === id) || null
    }

    async findExpenseById(expenseId: string): Promise<Expense | null> {
        return this.expenses.find(e => e.id === expenseId) || null
    }
}