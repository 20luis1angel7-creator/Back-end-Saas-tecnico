import { Client } from "../../../domain/entities/Client.js";
import { ClientRepository } from "../../../domain/repositories/ClientRepository.js";

export class UpdateClientUseCase{//Es una clase que representa la lógica de negocio para actualizar un cliente.
    constructor(private readonly repository: ClientRepository) {}

    async execute(//método que ejecuta el caso de uso.
        id: string,
        name: string,
        nickname: string,
        address: string,
        phone: string,
        planId: string
    ): Promise<Client> {//Devuelve una promesa que resuelve con un objeto Client.
        //buscar cliente
        const client = await this.repository.findById(id);

        if(!client) {
            throw new Error("Client not found");
        }
        //actualizar datos
        client.updateData(name, nickname, address, phone, planId)
        //guada cliente actualizado
        await this.repository.save(client);
        //retorna el cliente
        return client
    }
}



