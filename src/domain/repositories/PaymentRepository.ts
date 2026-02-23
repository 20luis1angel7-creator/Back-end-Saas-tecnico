import { Payment } from "../entities/Payment.js";

export interface PaymentRepository {
    save(payment: Payment): Promise<void>;
    findById(clientId: string): Promise<Payment | null>;
    findByInvoiceId(id: string): Promise<Payment[]>;
}