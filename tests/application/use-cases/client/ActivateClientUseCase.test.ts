import { describe, it, expect } from "vitest";
import { ActivateClientUseCase } from "../../../../src/application/use-cases/client/ActivateClientUseCase.js";
import { InMemoryClientRepository } from "../../../../src/infrastructure/database/repositories/InMemoryClientRepository.js";
import { Client } from "../../../../src/domain/entities/Client.js";
import { randomUUID } from "node:crypto";
import { InMemoryOrderRepository } from "../../../../src/infrastructure/database/repositories/InMemoryOrderRepository.js";
import { Order } from "../../../../src/domain/entities/Order.js";


describe("ActivateClientUseCase", () => {
    it("should activate client successfully", async () => {
        const clientRepository = new InMemoryClientRepository();
        const orderRepository = new InMemoryOrderRepository();

        const client = new Client(
            randomUUID(),
            "Luis",
            "luis01",
            "123456789",
            "Santo Domingo",
            "8090000000",
            "plan-basic"
        );

        await clientRepository.save(client);
        const order = new Order(
            crypto.randomUUID(),
            client.id,
            "PENDING",
            new Date()
        );
        order.start();
        order.complete();

        await orderRepository.save(order);

        const usecase = new ActivateClientUseCase(clientRepository, orderRepository);

        const result = await usecase.execute(client.id);

        expect(result.status).toBe("ACTIVE");
    })

    it("should throw if client does not exist", async () => {
        const clientRepository = new InMemoryClientRepository();
        const orderRepository = new InMemoryOrderRepository()

        const usecase = new ActivateClientUseCase(clientRepository, orderRepository);

        await expect(usecase.execute("fake-id"))
        .rejects
        .toThrow("Client not found");
    })

    it("should throw if activating twice", async () => {
        const clientRepository = new InMemoryClientRepository();
        const orderRepository = new InMemoryOrderRepository()

        const client = new Client(
            randomUUID(),
            "Luis",
            "luis01",
            "123456789",
            "Santo Domingo",
            "8090000000",
            "plan-basic"
        );

        await clientRepository.save(client);

        const order = new Order(
            randomUUID(),
            client.id,
            "PENDING",
            new Date()
        );
        order.start();
        order.complete();
        
        await orderRepository.save(order);
       
        const usecase = new ActivateClientUseCase(clientRepository, orderRepository);
        //primera activacion
        await usecase.execute(client.id);
        //segunda activacion
        await expect(usecase.execute(client.id))
        .rejects
        .toThrow("Client cannot be activated from current state");
    });
});

























