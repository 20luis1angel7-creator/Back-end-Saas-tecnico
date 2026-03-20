import { Invoice, InvoiceStatus } from "../../../domain/entities/Invoice.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
export declare class InMemoryInvoiceRepository implements InvoiceRepository {
    private invoices;
    save(invoice: Invoice): Promise<void>;
    findById(id: string): Promise<Invoice | null>;
    findByStatus(status: InvoiceStatus): Promise<Invoice[]>;
    findByClientAndStatus(clientId: string, status: InvoiceStatus): Promise<Invoice[]>;
    findByClientAndMonth(clientId: string, month: number, year: number): Promise<Invoice[]>;
    findByClientId(clientId: string): Promise<Invoice[]>;
}
//# sourceMappingURL=InMemoryInvoiceRepository.d.ts.map