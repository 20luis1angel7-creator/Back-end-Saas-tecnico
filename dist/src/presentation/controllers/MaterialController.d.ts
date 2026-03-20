import { Request, Response } from "express";
export declare class MaterialController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getById(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    listmaterials(req: Request<{
        companyId: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    deactivate(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=MaterialController.d.ts.map