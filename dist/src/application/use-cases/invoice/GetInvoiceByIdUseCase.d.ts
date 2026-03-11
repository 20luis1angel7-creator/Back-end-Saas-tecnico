import { Invoice } from "../../../domain/entities/Invoice.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
export declare class GetInvoiceByIdUseCase {
    private readonly invoiceRepository;
    constructor(invoiceRepository: InvoiceRepository);
    execute(invoiceId: string): Promise<Invoice | null>;
}
//# sourceMappingURL=GetInvoiceByIdUseCase.d.ts.map