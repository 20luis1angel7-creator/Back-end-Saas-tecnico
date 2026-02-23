import { Request, Response } from "express";
import { InMemoryClientRepository } from "../../infrastructure/database/repositories/InMemoryClientRepository.js";
import { CreateClientUseCase } from "../../application/use-cases/client/CreateClientUseCase.js";
import { ListClientsUseCase } from "../../application/use-cases/client/ListClientsUseCase.js";
import { GetClientByIdUseCase } from "../../application/use-cases/client/GetClientByIdUseCase.js";
import { UpdateClientUseCase } from "../../application/use-cases/client/UpdateClientUseCase.js";
import { DeleteClientUseCase } from "../../application/use-cases/client/DeleteClientUseCase.js";
import { ActivateClientUseCase } from "../../application/use-cases/client/ActivateClientUseCase.js";
import { SuspendClientUseCase } from "../../application/use-cases/client/SuspendClientUseCase.js";
import { clientRepository, orderRepository } from "../../infrastructure/constainer.js";
import { NotFoundError, BusinessRuleError } from "../../domain/errors/DomainErrors.js";


//Creando el repositorio. Inyectándolo al caso de uso
//const clientRepository = new InMemoryClientRepository();
//const orderRepository = new InMemoryOrderRepository();
//const createClientUseCase = new CreateClientUseCase(repository);
//Defines una clase controladora.
export class ClientController{
    async create( req: Request, res: Response) {
        try {
            //recibes datos y se los pasas al caso de uso
            const usecase = new CreateClientUseCase(
                clientRepository, 
                orderRepository
            );
            const result = await usecase.execute(req.body)
            //el cliente fue creado
            return res.status(201).json(result);
        //si el caso de uso lanza error    
        } catch (error: any) {
            if (error instanceof BusinessRuleError) {
            return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message });
            }
            
            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
            
        }
    }

    async list(req: Request, res: Response) {
        const usecase = new ListClientsUseCase(clientRepository);
        const result = await usecase.execute()

        res.json(result)
    }

    async getById(req: Request<{ id: string}>, res: Response) {
        try {
            const usecase = new GetClientByIdUseCase(clientRepository);
            const result = await usecase.execute(req.params.id);

            res.status(200).json(result)
        } catch (error: any) {
            if(error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message });
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async delete(req: Request<{ id: string}>, res: Response) {
        try {
            const usecase = new DeleteClientUseCase(clientRepository);
            const result = await usecase.execute(req.params.id);

            res.status(204).send()
        } catch (error: any) {
            if(error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }
            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async activate(req: Request<{ id: string }>, res: Response) {
        try {
            const usecase = new ActivateClientUseCase(clientRepository, orderRepository);
            const result = await usecase.execute(req.params.id);

            res.json(result);
        } catch (error: any) {
            if( error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message })
            }
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message });
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }

    async suspend(req: Request<{id: string}>, res: Response) {
        try {
            const usecase = new SuspendClientUseCase(clientRepository);
            const result = await usecase.execute(req.params.id);

            res.json(result)
        } catch (error: any) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message})
            }

            if(error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error"})
        }
    }
    async update(req: Request<{id: string}>, res:Response) {
        try {
        const usecase = new UpdateClientUseCase(clientRepository);
        const {name, nickname, address, phone, planId} = req.body;

        const result = await usecase.execute(req.params.id,
            name, nickname, address, phone, planId
        );
        res.json(result)
        } catch (error: any) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ type: "NOT_FOUND", message: error.message })
            }
            
            if (error instanceof BusinessRuleError) {
                return res.status(400).json({ type: "BUSINESS_RULE_VIOLATION", message: error.message })
            }

            return res.status(500).json({ type: "INTERNAL_ERROR", message:  "Internal server error" })
        }
    }
}


