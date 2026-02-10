import { Client } from "../../../domain/entities/Client.js";
import type { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { randomUUID } from "crypto";


interface CreateClientDTO {
    name: string;
    nickname: string;
    cedula: string;
    address: string;
    phone: string;
    planId: string;
}

export class CreateClientUseCase {
    constructor(private readonly repository: ClientRepository) {}

    async execute(data:CreateClientDTO): Promise<Client> {

        //valida duplicado de cedula
        const existingClient = await this.repository.findByCedula(data.cedula);

        if (existingClient) {
            throw new Error("Client with this cedula already exists");
        }

        //crea entidad(la cantidad valida a los demas)
        const client = new Client(
            randomUUID(),
            data.name,
            data.nickname,
            data.cedula,
            data.address,
            data.phone,
            data.planId
        )

        //guardar en repositorio
        await this.repository.save(client);

        return client;
    }
}
