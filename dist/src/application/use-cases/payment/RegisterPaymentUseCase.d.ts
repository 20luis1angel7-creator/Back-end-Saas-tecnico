import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
import { PaymentRepository } from "../../../domain/repositories/PaymentRepository.js";
import { IdGenerator } from "../../../infrastructure/services/IdGenerator.js";
interface RegisterPaymentRequest {
    clientId: string;
    invoiceId: string;
    amount: number;
}
export declare class RegisterPaymentUseCase {
    private invoiceRepository;
    private paymentRepository;
    private idGenerator;
    constructor(invoiceRepository: InvoiceRepository, paymentRepository: PaymentRepository, idGenerator: IdGenerator);
    execute(request: RegisterPaymentRequest): Promise<void>;
}
export {};
//# sourceMappingURL=RegisterPaymentUseCase.d.ts.map