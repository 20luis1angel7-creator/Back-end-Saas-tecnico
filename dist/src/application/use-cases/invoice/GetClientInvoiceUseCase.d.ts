import { Invoice } from "../../../domain/entities/Invoice.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
export declare class GetClientInvoiceUseCase {
    private readonly invoiceRepository;
    constructor(invoiceRepository: InvoiceRepository);
    execute(clientId: string): Promise<Invoice[]>;
}
//# sourceMappingURL=GetClientInvoiceUseCase.d.ts.map