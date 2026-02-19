import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
export declare class GenerateMonthlyInvoicesUseCase {
    private readonly clientRepository;
    private readonly invoiceRepository;
    constructor(clientRepository: ClientRepository, invoiceRepository: InvoiceRepository);
    execute(today: Date): Promise<void>;
}
//# sourceMappingURL=GenerateMonthlyinvoicesUseCase.d.ts.map