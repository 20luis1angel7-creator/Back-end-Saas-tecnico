import { Payment } from "../../../domain/entities/Payment.js";
import { PaymentRepository } from "../../../domain/repositories/PaymentRepository.js";
export declare class GetPaymentByInvoiceUseCase {
    private readonly paymentRepository;
    constructor(paymentRepository: PaymentRepository);
    execute(invoiceId: string): Promise<Payment[]>;
}
//# sourceMappingURL=GetPaymentByInvoiceUseCase.d.ts.map