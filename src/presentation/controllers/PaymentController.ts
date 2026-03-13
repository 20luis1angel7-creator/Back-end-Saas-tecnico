import { Request, Response } from "express"
import { expenseRepository, getPaymentByInvoiceUseCase, materialRepository, registerPaymentUseCase } from "../../infrastructure/container.js"
import { NotFoundError, BusinessRuleError } from "../../domain/errors/DomainErrors.js"
import { RegisterMaterialPurchaseUseCase } from "../../application/use-cases/expense/RegisterMaterialPurchaseUseCase.js"

export class PaymentController {

    async registerPayment(req: Request, res: Response) {
        try {
            const payment = req.body
            const result = await registerPaymentUseCase.execute(payment)
            
            return res.status(200).json(result)
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }

    }

    async getInvoicePayment(req: Request<{invoiceId: string}>, res: Response) {
        try {
            const invoiceId = req.params.invoiceId
            const result = await getPaymentByInvoiceUseCase.execute(invoiceId)

            return res.status(200).json(result)
        }catch(error:unknown) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }
}