import { Invoice } from "../../../domain/entities/Invoice.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class GenerateMonthlyInvoicesUseCase {
    planRepository;
    clientRepository;
    invoiceRepository;
    idGenerate;
    constructor(planRepository, clientRepository, invoiceRepository, idGenerate) {
        this.planRepository = planRepository;
        this.clientRepository = clientRepository;
        this.invoiceRepository = invoiceRepository;
        this.idGenerate = idGenerate;
    }
    async execute(today) {
        const clients = await this.clientRepository.findAll();
        const month = today.getMonth();
        const year = today.getFullYear();
        for (const client of clients) {
            if (client.status !== "ACTIVE" && client.status !== "SUSPENDED") {
                continue;
            }
            const existingInvoice = await this.invoiceRepository.findByClientAndMonth(client.id, month, year);
            if (existingInvoice) {
                continue;
            }
            const dueDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
            const plan = await this.planRepository.findById(client.planId);
            if (!plan) {
                throw new NotFoundError("Not found plan");
            }
            const amount = plan.price;
            const invoice = new Invoice(this.idGenerate.generate(), client.id, amount, today, dueDate);
            await this.invoiceRepository.save(invoice);
        }
    }
}
//# sourceMappingURL=GenerateMonthlyinvoicesUseCase.js.map