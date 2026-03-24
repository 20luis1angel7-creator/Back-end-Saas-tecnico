import { Expense } from "../../../domain/entities/Expense.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";







export class InMemoryExpenseRepository implements ExpenseRepository {
    private expenses: Expense[] = []

    async save(expense: Expense): Promise<void> {
        const existingExpense = await this.expenses.findIndex(e => e.id === expense.id)

        if (existingExpense === -1) {
            this.expenses.push(expense)
        } else {
            this.expenses[existingExpense] = expense
        }
            
    }

    async findAll(): Promise<Expense[]> {
        return this.expenses
    }

    async deleteById(id: string): Promise<void> {
        const index = this.expenses.findIndex(e => e.id === id)

        if (index === -1) {
            throw new NotFoundError("Expense not found")
        }

        this.expenses.splice(index, 1)
    }

    async findExpenseById(expenseId: string): Promise<Expense | null> {
        return this.expenses.find(e => e.id === expenseId) || null
    }
}