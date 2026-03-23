import { randomUUID } from "node:crypto";
import { Expense, ExpenseType } from "../../../domain/entities/Expense.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { ExpenseRepository } from "../../../domain/repositories/ExpenseRepository.js";
import { UuidGenerator } from "../../../infrastructure/services/IdGenerator.js";

interface ExpenseDTO {
    // id: UuidGenerator;
    type: ExpenseType;
    description: string;
    amount: number;
    date: Date;
    createdAt: Date;
}

export class CreateExpenseUseCase {
    constructor(
        private readonly expenseRepository: ExpenseRepository
    ) {}

    async execute(dato: ExpenseDTO): Promise<Expense> {
        

        const expense = new Expense({
            id: randomUUID(),
            type: dato.type,
            description: dato.description,
            amount: dato.amount,
            date: dato.date,
            createdAt: dato.createdAt
        })

        await this.expenseRepository.save(expense)
        
        return expense
    }
}