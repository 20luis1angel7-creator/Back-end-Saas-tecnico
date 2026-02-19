import { Invoice } from "../../../domain/entities/Invoice.js";
export class GenerateMonthlyInvoicesUseCase {
    clientRepository;
    invoiceRepository;
    constructor(clientRepository, invoiceRepository) {
        this.clientRepository = clientRepository;
        this.invoiceRepository = invoiceRepository;
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
            if (!existingInvoice) {
                continue;
            }
            const dueDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
            const invoice = new Invoice(generateId(), client.id, today, dueDate);
            await this.invoiceRepository.save(invoice);
        }
    }
}
//# sourceMappingURL=GenerateMonthlyinvoicesUseCase.js.map