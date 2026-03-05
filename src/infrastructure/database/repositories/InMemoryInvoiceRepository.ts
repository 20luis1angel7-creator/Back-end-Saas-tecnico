import { Invoice, InvoiceStatus } from "../../../domain/entities/Invoice.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";


export class InMemoryInvoiceRepository implements InvoiceRepository {
    private invoices: Invoice[] = []

    async save(invoice: Invoice): Promise<void> {
        const existinginvioce =  this.invoices.findIndex(i => i.id === invoice.id)

        if(existinginvioce !== -1) {
            this.invoices[existinginvioce] = invoice
        } else {
            this.invoices.push(invoice)
        }
    }

    async findById(id: string): Promise<Invoice | null> {
        return this.invoices.find(i => i.id === id) || null
    }

    async findByStatus(status: InvoiceStatus): Promise<Invoice[]> {
        return this.invoices.filter(i => i.status === status)
    }

    async findByClientAndStatus(clientId: string, status: InvoiceStatus): Promise<Invoice[]> {
        return this.invoices.filter(i => 
            i.clientId === clientId && 
            i.status === status
        )
    }

    async findByClientAndMonth(clientId: string, month: number, year: number): Promise<Invoice[]> {
        return this.invoices.filter(i => 
            i.clientId === clientId &&
            i.issueDate.getMonth() === month && 
            i.issueDate.getFullYear() === year)
    }

    async findByClientId(clientId: string): Promise<Invoice[]> {
        return this.invoices.filter(i => i.clientId === clientId);
    }
}