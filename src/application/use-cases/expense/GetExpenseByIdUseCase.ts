import { Expense } from "../../../domain/entities/Expense.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";




export class GetExpenseByIdUseCase {
    constructor(
        private readonly expenseRepository: ExpenseRepository
    ){}

    async execute(expenseId: string): Promise<Expense | null> {
        const expense = await this.expenseRepository.findExpenseById(expenseId)

        if(!expense) {
            throw new NotFoundError("Expense not found")
        }

        return expense
    }
}