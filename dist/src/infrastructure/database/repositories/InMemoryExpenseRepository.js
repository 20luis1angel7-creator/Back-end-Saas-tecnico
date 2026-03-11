export class InMemoryExpenseRepository {
    expenses = [];
    async save(expense) {
        const existingExpense = await this.expenses.findIndex(e => e.id === expense.id);
        if (existingExpense <= 0) {
            this.expenses[existingExpense] = expense;
        }
        else {
            this.expenses.push(expense);
        }
    }
    async findAll() {
        return this.expenses;
    }
    async findByCompanyId(id) {
        return this.expenses.find(e => e.id === id) || null;
    }
    async findExpenseById(expenseId) {
        return this.expenses.find(e => e.id === expenseId) || null;
    }
}
//# sourceMappingURL=InMemoryExpenseRepository.js.map