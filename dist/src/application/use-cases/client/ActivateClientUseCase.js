import { NotFoundError, BusinessRuleError } from "../../../domain/errors/DomainErrors.js";
export class ActivateClientUseCase {
    clientRepository;
    orderRepository;
    constructor(clientRepository, orderRepository) {
        this.clientRepository = clientRepository;
        this.orderRepository = orderRepository;
    }
    async execute(id) {
        //buscar al cliente
        const client = await this.clientRepository.findById(id);
        //si no existe
        if (!client) {
            throw new NotFoundError("Client not found");
        }
        const orders = await this.orderRepository.findByClientId(id);
        const hasCompletedOrder = orders.some(order => order.status === "COMPLETED");
        if (!hasCompletedOrder) {
            throw new BusinessRuleError("Client cannot be activited without a completed order");
        }
        //activar al cliente
        client.activate();
        //guardar al cliente
        await this.clientRepository.save(client);
        //retornar al cliente
        return client;
    }
}
//# sourceMappingURL=ActivateClientUseCase.js.map