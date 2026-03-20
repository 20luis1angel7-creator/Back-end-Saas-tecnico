export class InMemoryPaymentRepository {
    payments = [];
    async save(payment) {
        this.payments.push(payment);
    }
    async findById(id) {
        const payment = this.payments.find(p => p.id === id);
        return payment ?? null;
    }
    async findByInvoiceId(invoiceId) {
        return this.payments.filter(p => p.invoiceId === invoiceId);
    }
}
//# sourceMappingURL=InMemoryPaymentRepository.js.map