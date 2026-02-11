import { describe, it, expect } from "vitest";
import { Client } from "../../../../src/domain/entities/Client.js";
import { GetClientByIdUseCase } from "../../../../src/application/use-cases/client/GetClientByIdUseCase.js";
import { InMemoryClientRepository } from "../../../../src/infrastructure/database/repositories/InMemoryClientRepository.js";
import { randomUUID } from "node:crypto";

describe("Get client by id use case", () => {

    it("should return client if exists", async () => {
        const repository = new InMemoryClientRepository();

        const client = new Client(
            randomUUID(),
                        "Luis",
                        "luis01",
                        "123456789",
                        "Santo Domingo",
                        "8090000000",
                        "plan-basic"
        )

        await repository.save(client);

        const usecase = new GetClientByIdUseCase(repository);

        const result = await usecase.execute(client.id);
        //validan que id y nombre sean correctos
        expect(result.id).toBe(client.id);
        expect(result.name).toBe("Luis");
    })

    it("should throw if client does not exist", async () => {
        const repository = new InMemoryClientRepository()
        const usecase = new GetClientByIdUseCase(repository);

        await expect(usecase.execute("123"))
        .rejects
        .toThrow("Client not found");
    })
})













//⚠️ TIP IMPORTANTE
// Cuando el método es async y esperas error:
// SIEMPRE usa:

// await expect(...).rejects.toThrow()
