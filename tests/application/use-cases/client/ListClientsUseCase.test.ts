import { describe, it, expect } from "vitest";
import { ListClientsUseCase } from "../../../../src/application/use-cases/client/ListClientsUseCase.js";
import { InMemoryClientRepository } from "../../../../src/infrastructure/database/repositories/InMemoryClientRepository.js";
import { randomUUID } from "node:crypto";
import { Client } from "../../../../src/domain/entities/Client.js";

describe("List clients usecase", () => {

    it("should return empty array if no clients", async () => {
        const repository = new InMemoryClientRepository();
        const usecase = new ListClientsUseCase(repository);

        const result = await usecase.execute()

        expect(result.length).toBe(0)
    })

    it("should return list of clients", async () => {
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
        const client2 = new Client (
            randomUUID(),
            "Luis",
            "luis01",
            "123456789",
            "Santo Domingo",
            "8090000000",
            "plan-basic"
        );

        await repository.save(client);
        await repository.save(client2);

        const usecase = new ListClientsUseCase(repository);

        const result = await usecase.execute();

        //expect(result.length).toBe(2)
        expect(result).toEqual([client,client2])
    })
})












