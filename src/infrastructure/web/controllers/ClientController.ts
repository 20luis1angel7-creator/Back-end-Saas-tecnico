import { Request, Response } from "express";
import { InMemoryClientRepository } from "../../database/repositories/InMemoryClientRepository.js";
import { CreateClientUseCase } from "../../../application/use-cases/client/CreateClientUseCase.js";

//Creando el repositorio. Inyectándolo al caso de uso
const repository = new InMemoryClientRepository();
const createClientUseCase = new CreateClientUseCase(repository);
//Defines una clase controladora.
export class ClientController{
    static async create( req: Request, res: Response) {
        try {
            //recibes datos y se los pasas al caso de uso
            const client = await createClientUseCase.execute(req.body);
            //el cliente fue creado
            return res.status(201).json(client);
        //si el caso de uso lanza error    
        } catch (error: any) {
            return res.status(400).json({ message: error.message});
        }
    }
}


