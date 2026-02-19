import { Client } from "../../../domain/entities/Client.js";
import type { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
interface CreateClientDTO {
    name: string;
    nickname: string;
    cedula: string;
    address: string;
    phone: string;
    planId: string;
}
export declare class CreateClientUseCase {
    private readonly clientrepository;
    private readonly orderRepository;
    constructor(clientrepository: ClientRepository, orderRepository: OrderRepository);
    execute(data: CreateClientDTO): Promise<Client>;
}
export {};
//# sourceMappingURL=CreateClientUseCase.d.ts.map