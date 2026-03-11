import { Expense } from "../../../domain/entities/Expense.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";



export class ListExpensesUseCase {
    constructor(
        private readonly expenseRepository: ExpenseRepository
    ) {}

    async execute(): Promise<Expense[]> {
        return await this.expenseRepository.findAll()
    }
}