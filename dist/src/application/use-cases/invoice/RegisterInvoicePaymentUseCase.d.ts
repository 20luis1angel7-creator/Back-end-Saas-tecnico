import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
import { RecalculateClienStatusUseCase } from "./RecalculateClientStatusUseCase.js";
export declare class RegisterInvoicePaymentUseCase {
    private readonly invoiceRepository;
    private readonly recalculateClienStatusUseCase;
    constructor(invoiceRepository: InvoiceRepository, recalculateClienStatusUseCase: RecalculateClienStatusUseCase);
    execute(invoiceId: string, paymentDate: Date): Promise<void>;
}
//# sourceMappingURL=RegisterInvoicePaymentUseCase.d.ts.map