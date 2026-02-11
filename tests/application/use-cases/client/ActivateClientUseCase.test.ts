import { describe, it, expect } from "vitest";
import { ActivateClientUseCase } from "../../../../src/application/use-cases/client/ActivateClientUseCase.js";
import { InMemoryClientRepository } from "../../../../src/infrastructure/database/repositories/InMemoryClientRepository.js";
import { Client } from "../../../../src/domain/entities/Client.js";
import { randomUUID } from "node:crypto";

describe("ActivateClientUseCase", () => {
    it("should activae client successfully", async () => {
        const repository = new InMemoryClientRepository();

        const client = new Client(
            randomUUID(),
            "Luis",
            "luis01",
            "123456789",
            "Santo Domingo",
            "8090000000",
            "plan-basic"
        );

        await repository.save(client);

        const usecase = new ActivateClientUseCase(repository);

        const result = await usecase.execute(client.id);

        expect(result.status).toBe("ACTIVE");
    })

    it("should throw if client does not exist", async () => {
        const repository = new InMemoryClientRepository();
        const usecase = new ActivateClientUseCase(repository);

        await expect(usecase.execute("fake-id"))
        .rejects
        .toThrow("Client not found");
    })

    it("should throw if activating twice", async () => {
        const repository = new InMemoryClientRepository();

        const client = new Client(
            randomUUID(),
            "Luis",
            "luis01",
            "123456789",
            "Santo Domingo",
            "8090000000",
            "plan-basic"
        );
        
        client.activate();
        await repository.save(client);

        const usecase = new ActivateClientUseCase(repository);

        await expect(usecase.execute(client.id))
        .rejects
        .toThrow("Client cannot be activited from current state");
    });
});

























