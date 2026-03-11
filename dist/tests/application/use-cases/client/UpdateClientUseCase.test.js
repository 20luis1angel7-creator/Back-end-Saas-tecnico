import { describe, it, expect } from "vitest";
import { UpdateClientUseCase } from "../../../../src/application/use-cases/client/UpdateClientUseCase.js";
import { InMemoryClientRepository } from "../../../../src/infrastructure/database/repositories/InMemoryClientRepository.js";
import { randomUUID } from "node:crypto";
import { Client } from "../../../../src/domain/entities/Client.js";
describe("Update client usecase", () => {
    it("Update successfully", async () => {
        const repository = new InMemoryClientRepository();
        //crear el client
        const client = new Client(randomUUID(), "Luis", "luis01", "123456789", "Santo Domingo", "8090000000", "plan-basic");
        //guardar en el repo
        await repository.save(client);
        //crear case de uso(inyecta el repo)
        const usecase = new UpdateClientUseCase(repository);
        //Actualiza el cliente con ese id y cambia:
        const result = await usecase.execute(client.id, "Juan", "juan01", "Santiago", "8090001000", "plan-pro");
        expect(result.name).toBe("Juan"); //Verifica que el nombre cambió.
        expect(result.address).toBe("Santiago"); //Verifica que la dirección cambió.
        expect(result.id).toBe(client.id); //Verifica que el ID NO cambió.
        expect(result.cedula).toBe("123456789"); //Verifica que la cédula NO cambió.
    });
    it("Error client not found", async () => {
        const repository = new InMemoryClientRepository();
        const usecase = new UpdateClientUseCase(repository);
        //ejecuta id falso
        await expect(usecase.execute("fake-id", "Juan", "juan01", "Santiago", "8090001000", "plan-pro")).rejects.toThrow("Client not found");
    });
});
//# sourceMappingURL=UpdateClientUseCase.test.js.map