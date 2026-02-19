import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
export declare class UpdateOverdueInvoiceUseCase {
    private readonly invoiceRepository;
    constructor(invoiceRepository: InvoiceRepository);
    execute(today: Date): Promise<void>;
}
//# sourceMappingURL=UpdateOverdueInvoiceUseCase.d.ts.map