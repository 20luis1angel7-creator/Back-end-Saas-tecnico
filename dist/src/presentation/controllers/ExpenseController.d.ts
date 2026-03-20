import { Request, Response } from "express";
export declare class ExpenseController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getExpenseById(req: Request<{
        expenseId: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    listExpenses(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    registerMaterialPurchase(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=ExpenseController.d.ts.map