import { Client } from "../../../domain/entities/Client.js";
import { randomUUID } from "crypto";
import { Order } from "../../../domain/entities/Order.js";
import { BusinessRuleError } from "../../../domain/errors/DomainErrors.js";
export class CreateClientUseCase {
    clientrepository;
    orderRepository;
    constructor(clientrepository, orderRepository) {
        this.clientrepository = clientrepository;
        this.orderRepository = orderRepository;
    }
    async execute(data) {
        //valida duplicado de cedula
        const existingClient = await this.clientrepository.findByCedula(data.cedula);
        if (existingClient) {
            throw new BusinessRuleError("Client with this cedula already exists");
        }
        //crea entidad(la cantidad valida a los demas)
        const client = new Client(randomUUID(), data.name, data.nickname, data.cedula, data.address, data.phone, data.planId, "PENDING_INSTALLATION", data.routerSerial);
        //guardar en repositorio
        await this.clientrepository.save(client);
        //orden creada
        const order = new Order(randomUUID(), client.id, "PENDING", new Date());
        //guardar orden
        await this.orderRepository.save(order);
        //console.log ("order creada: ", order);
        return client;
    }
}
//# sourceMappingURL=CreateClientUseCase.js.map