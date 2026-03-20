import { Client } from "../../../domain/entities/Client.js";
import { NotFoundError } from "../../../domain/errors/DomainErrors.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";

interface UpdateClientDTO {
    id: string,
    name: string,
    nickname: string,
    address: string,
    phone: string,
    planId: string,
    routerSerial: string
}
export class UpdateClientUseCase{//Es una clase que representa la lógica de negocio para actualizar un cliente.
    constructor(private readonly repository: ClientRepository) {}

    //método que ejecuta el caso de uso.
    async execute(data:UpdateClientDTO): Promise<Client> {//Devuelve una promesa que resuelve con un objeto Client.
        //buscar cliente
        const client = await this.repository.findById(data.id);

        if(!client) {
            throw new NotFoundError("Client not found");
        }
        //actualizar datos
        client.updateData(
            data.name, 
            data.nickname, 
            data.address, 
            data.phone, 
            data.planId,
            data.routerSerial)
        //guada cliente actualizado
        await this.repository.save(client);
        //retorna el cliente
        return client
    }
}



