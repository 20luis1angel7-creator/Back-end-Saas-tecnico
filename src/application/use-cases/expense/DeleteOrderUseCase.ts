import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";



export class DeleteExpenseUseCase {
    constructor(
        private readonly expenseRepository: ExpenseRepository
    ) {}

    async execute(id: string): Promise<void> {
        const expense = await this.expenseRepository.findExpenseById(id)

        if (!expense) {
            throw new NotFoundError("Expense not found")
        }

        await this.expenseRepository.deleteById(id)
    }
}