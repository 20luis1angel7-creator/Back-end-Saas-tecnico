import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
export declare class RecalculateClienStatusUseCase {
    private readonly clientRepository;
    private readonly invoiceRepository;
    constructor(clientRepository: ClientRepository, invoiceRepository: InvoiceRepository);
    execute(clientId: string): Promise<void>;
}
//# sourceMappingURL=RecalculateClientStatusUseCase.d.ts.map