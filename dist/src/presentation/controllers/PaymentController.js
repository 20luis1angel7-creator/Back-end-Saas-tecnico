import { getPaymentByInvoiceUseCase, registerPaymentUseCase } from "../../infrastructure/container.js";
export class PaymentController {
    async pay(req, res) {
        try {
            const payment = req.body;
            const result = await registerPaymentUseCase.execute(payment);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    async getInvoicePayment(req, res) {
        try {
            const invoiceId = req.params.invoiceId;
            const result = await getPaymentByInvoiceUseCase.execute(invoiceId);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
//# sourceMappingURL=PaymentController.js.map