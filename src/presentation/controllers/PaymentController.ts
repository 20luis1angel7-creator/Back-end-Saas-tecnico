import { Request, Response } from "express"
import { getPaymentByInvoiceUseCase, registerPaymentUseCase } from "../../infrastructure/constainer.js"

export class PaymentController {

    async pay(req: Request, res: Response) {
        try {
            const payment = req.body
            const result = await registerPaymentUseCase.execute(payment)
            
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }

    }

    async getInvoicePayment(req: Request<{invoiceId: string}>, res: Response) {
        try {
            const invoiceId = req.params.invoiceId
            const result = await getPaymentByInvoiceUseCase.execute(invoiceId)

            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }
}