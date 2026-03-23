import { Request, Response } from "express";
export declare class OrderController {
    getById(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    start(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    complete(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    cancel(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    list(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=OrderController.d.ts.map