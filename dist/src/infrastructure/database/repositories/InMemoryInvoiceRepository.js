export class InMemoryInvoiceRepository {
    invoices = [];
    async save(invoice) {
        const existinginvioce = this.invoices.findIndex(i => i.id === invoice.id);
        if (existinginvioce !== -1) {
            this.invoices[existinginvioce] = invoice;
        }
        else {
            this.invoices.push(invoice);
        }
    }
    async findById(id) {
        return this.invoices.find(i => i.id === id) || null;
    }
    async findByStatus(status) {
        return this.invoices.filter(i => i.status === status);
    }
    async findByClientAndStatus(clientId, status) {
        return this.invoices.filter(i => i.clientId === clientId &&
            i.status === status);
    }
    async findByClientAndMonth(clientId, month, year) {
        return this.invoices.filter(i => i.clientId === clientId &&
            i.issueDate.getMonth() === month &&
            i.issueDate.getFullYear() === year);
    }
    async findByClientId(clientId) {
        return this.invoices.filter(i => i.clientId === clientId);
    }
}
//# sourceMappingURL=InMemoryInvoiceRepository.js.map