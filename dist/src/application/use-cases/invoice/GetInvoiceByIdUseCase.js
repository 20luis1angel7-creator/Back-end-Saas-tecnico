import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
export class GetInvoiceByIdUseCase {
    invoiceRepository;
    constructor(invoiceRepository) {
        this.invoiceRepository = invoiceRepository;
    }
    async execute(invoiceId) {
        const invoice = await this.invoiceRepository.findById(invoiceId);
        if (!invoice) {
            throw new NotFoundError("Invoice not found");
        }
        return invoice;
    }
}
//# sourceMappingURL=GetInvoiceByIdUseCase.js.map