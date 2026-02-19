import type { ClientRepository } from "../../../domain/repositories/ClientRepository.js";
import { Client } from "../../../domain/entities/Client.js";
import type { OrderRepository } from "../../../domain/repositories/OrderRepository.js";
export declare class ActivateClientUseCase {
    private readonly clientRepository;
    private readonly orderRepository;
    constructor(clientRepository: ClientRepository, orderRepository: OrderRepository);
    execute(id: string): Promise<Client>;
}
//# sourceMappingURL=ActivateClientUseCase.d.ts.map