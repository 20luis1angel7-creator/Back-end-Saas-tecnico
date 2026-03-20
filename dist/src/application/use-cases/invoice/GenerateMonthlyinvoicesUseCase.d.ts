import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { InvoiceRepository } from "../../../domain/repositories/InvoiceRepository.js";
import { IdGenerator } from "../../../infrastructure/services/IdGenerator.js";
import { PlanRepository } from "../../../domain/repositories/PlanRepository.js";
export declare class GenerateMonthlyInvoicesUseCase {
    private readonly planRepository;
    private readonly clientRepository;
    private readonly invoiceRepository;
    private readonly idGenerate;
    constructor(planRepository: PlanRepository, clientRepository: ClientRepository, invoiceRepository: InvoiceRepository, idGenerate: IdGenerator);
    execute(today: Date): Promise<void>;
}
//# sourceMappingURL=GenerateMonthlyinvoicesUseCase.d.ts.map