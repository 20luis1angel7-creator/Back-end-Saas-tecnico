import { Request, Response } from "express";
export declare class ClientController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    list(req: Request, res: Response): Promise<void>;
    getById(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    delete(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    activate(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    suspend(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    update(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=ClientController.d.ts.map