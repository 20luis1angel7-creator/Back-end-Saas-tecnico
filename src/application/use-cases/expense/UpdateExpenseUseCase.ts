import { Expense } from "../../../domain/entities/Expense.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";

export class UpdateExpenseUseCase {
  constructor(private readonly expenseRepository: ExpenseRepository) {}

  async execute(
    id: string,
    description: string,
    amount: number,
    date: Date
  ): Promise<Expense> {
    const expense = await this.expenseRepository.findExpenseById(id);

    if (!expense) {
      throw new NotFoundError("Expense not found");
    }

    expense.update(description, amount, date);

    await this.expenseRepository.save(expense);

    return expense;
  }
}