import { Request, Response } from "express";
export declare class InvoiceController {
    generate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getClientInvoices(req: Request<{
        clientId: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    payInvoice(req: Request<{
        invoiceId: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    getInvoiceById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateOverdueInvoices(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=InvoiceController.d.ts.map