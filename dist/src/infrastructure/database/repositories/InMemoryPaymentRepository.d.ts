import { Payment } from "../../../domain/entities/Payment.js";
import { PaymentRepository } from "../../../domain/repositories/PaymentRepository.js";
export declare class InMemoryPaymentRepository implements PaymentRepository {
    private payments;
    save(payment: Payment): Promise<void>;
    findById(id: string): Promise<Payment | null>;
    findByInvoiceId(invoiceId: string): Promise<Payment[]>;
}
//# sourceMappingURL=InMemoryPaymentRepository.d.ts.map