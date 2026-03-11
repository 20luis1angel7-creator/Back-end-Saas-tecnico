import { Request, Response } from "express";
export declare class PaymentController {
    pay(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getInvoicePayment(req: Request<{
        invoiceId: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=PaymentController.d.ts.map