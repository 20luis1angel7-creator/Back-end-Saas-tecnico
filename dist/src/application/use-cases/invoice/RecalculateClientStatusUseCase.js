import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class RecalculateClienStatusUseCase {
    clientRepository;
    invoiceRepository;
    constructor(clientRepository, invoiceRepository) {
        this.clientRepository = clientRepository;
        this.invoiceRepository = invoiceRepository;
    }
    async execute(clientId) {
        const client = await this.clientRepository.findById(clientId);
        if (!client) {
            throw new NotFoundError("Client not found");
        }
        const overdueInvoices = await this.invoiceRepository.findByClientAndStatus(clientId, "OVERDUE");
        const count = overdueInvoices.length;
        if (count === 0) {
            client.activate();
        }
        if (count === 1) {
            client.markWarning();
        }
        if (count > 2) {
            client.suspend();
        }
        await this.clientRepository.save(client);
    }
}
//# sourceMappingURL=RecalculateClientStatusUseCase.js.map