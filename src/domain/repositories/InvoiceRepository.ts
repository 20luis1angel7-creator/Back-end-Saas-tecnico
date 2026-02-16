import { Invoice } from "../entities/Invoice.js";


export interface InvoiceRepository {
    save(invioce: Invoice): Promise<void>;
    findByClientAndMonth(clientId: string, month: number, year: number): Promise<Invoice | null>;
}