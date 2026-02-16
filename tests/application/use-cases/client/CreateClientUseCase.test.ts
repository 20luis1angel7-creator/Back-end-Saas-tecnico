import { describe, it, expect } from "vitest";
import { CreateClientUseCase } from "../../../../src/application/use-cases/client/CreateClientUseCase.js";
import { InMemoryClientRepository } from "../../../../src/infrastructure/database/repositories/InMemoryClientRepository.js";
import { InMemoryOrderRepository } from "../../../../src/infrastructure/database/repositories/InMemoryOrderRepository.js";
import { clientRepository } from "../../../../src/infrastructure/constainer.js";


describe("CreateClientUseCase", () => {
    it("should create client successfully", async () => {
        const clientRepository = new InMemoryClientRepository();
        const orderRepository = new InMemoryOrderRepository();

        const useCase = new CreateClientUseCase(clientRepository, orderRepository);

        const result = await useCase.execute({
            name: "Luis",
            nickname: "luis01",
            cedula: "123456789",
            address: "Santo Domingo",
            phone: "8090000000",
            planId: "plan-basic"
        });
        expect(result.id).toBeDefined();
        expect(result.status).toBe("PENDING_INSTALLATION");
    })

    //cedula duplicada
    it("should throw if cedula already exists", async () => {
        const clientRepository = new InMemoryClientRepository();
        const orderRepository = new InMemoryOrderRepository();

        const useCase = new CreateClientUseCase(clientRepository, orderRepository);

        await useCase.execute({
            name: "Luis",
            nickname: "luis01",
            cedula: "123456789",
            address: "Santo Domingo",
            phone: "8090000000",
            planId: "plan-basic"
        });
        
        await expect(
            useCase.execute({
                name: "Pedro",
                nickname: "pedro01",
                cedula: "123456789",
                address: "Santiago",
                phone: "8090000001",
                planId: "plan-basic"
            })
        ).rejects.toThrow()
    });

    it("should throw if planId is missing", async () => {
        const clientRepository = new InMemoryClientRepository();
        const orderRepository = new InMemoryOrderRepository();

        const useCase = new CreateClientUseCase(clientRepository, orderRepository);

        await expect( 
            useCase.execute({
                name: "Luis",
                nickname: "luis01",
                cedula: "123456789",
                address: "Santo Domingo",
                phone: "8090000000",
                planId: ""
            })
        ).rejects.toThrow()
    })

    it("should throw if name is empty", async () => {
        const clientRepository = new InMemoryClientRepository();
        const orderRepository = new InMemoryOrderRepository();

        const useCase = new CreateClientUseCase(clientRepository, orderRepository);

        await expect(
             useCase.execute({
                name: "",
                nickname: "luis01",
                cedula: "123456789",
                address: "Santo Domingo",
                phone: "8090000000",
                planId: "plan-basic"
            })
        ).rejects.toThrow()
    })

})

