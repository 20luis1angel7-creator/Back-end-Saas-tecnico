import { Request, Response } from "express";
export declare class OrderController {
    getClientById(req: Request<{
        clientId: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    start(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    complete(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    cancel(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=OrderController.d.ts.map