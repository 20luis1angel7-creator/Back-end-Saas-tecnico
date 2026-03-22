export class InMemoryExpenseRepository {
    expenses = [];
    async save(expense) {
        const existingExpense = await this.expenses.findIndex(e => e.id === expense.id);
        if (existingExpense === -1) {
            this.expenses.push(expense);
        }
        else {
            this.expenses[existingExpense] = expense;
        }
    }
    async findAll() {
        return this.expenses;
    }
    async findExpenseById(expenseId) {
        return this.expenses.find(e => e.id === expenseId) || null;
    }
}
//# sourceMappingURL=InMemoryExpenseRepository.js.map