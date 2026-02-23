import { describe, it, expect } from "vitest";
import { SuspendClientUseCase } from "../../../../src/application/use-cases/client/SuspendClientUseCase.js";
import { InMemoryClientRepository } from "../../../../src/infrastructure/database/repositories/InMemoryClientRepository.js";
import { Client } from "../../../../src/domain/entities/Client.js";
import { randomUUID } from "node:crypto";

describe("SuspendClientUseCase", () => {
    it("should suspend an ACTIVE client successfully", async () => {
        const repository = new InMemoryClientRepository();

        const client = new Client(
            randomUUID(),//“Para darle un nombre único a cada cliente”
            "Luis",
            "luis01",
            "123456789",
            "Santo Domingo",
            "8090000000",
            "plan-basic"
        );

        client.activate();//activar 
        await repository.save(client);

        const usecase = new SuspendClientUseCase(repository);

        
        const result = await usecase.execute(client.id);//Suspende el cliente con este id”

        expect(result.status).toBe("SUSPENDED");//comprobar
    });

    it("should throw if client does not exist", async () => {
        const repository = new InMemoryClientRepository();
        const usecase = new SuspendClientUseCase(repository);

        
        await expect(usecase.execute("non-existeng-id"))
        .rejects
        .toThrow("Client not found")
    })

    it("should throw if client is not ACTIVE", async () => {
        const repository = new InMemoryClientRepository();

        const client = new Client (
            randomUUID(),
            "Luis",
            "luis01",
            "123456789",
            "Santo Domingo",
            "8090000000",
            "plan-basic"
        );
        //guardar
        await repository.save(client)

        const usecase = new SuspendClientUseCase(repository);

        await expect(usecase.execute(client.id))
        .rejects
        .toThrow("Only active clients can be suspend")

    })
})



