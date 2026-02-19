import { Invoice, InvoiceStatus } from "../entities/Invoice.js";
export interface InvoiceRepository {
    save(invioce: Invoice): Promise<void>;
    findByClientAndMonth(clientId: string, month: number, year: number): Promise<Invoice[]>;
    findByStatus(status: InvoiceStatus): Promise<Invoice[]>;
    findByClientAndStatus(clientId: string, status: InvoiceStatus): Promise<Invoice[]>;
    findById(id: string): Promise<Invoice | null>;
}
//# sourceMappingURL=InvoiceRepository.d.ts.map