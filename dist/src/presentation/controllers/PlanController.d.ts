import { Request, Response } from "express";
export declare class PlanController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getPlanById(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    listPlans(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deactivatePlan(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    updatePlan(req: Request<{
        id: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=PlanController.d.ts.map