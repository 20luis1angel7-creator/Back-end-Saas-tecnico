import { describe, it, expect } from "vitest";
import { DeleteClientUseCase } from "../../../../src/application/use-cases/client/DeleteClientUseCase.js";
import { InMemoryClientRepository } from "../../../../src/infrastructure/database/repositories/InMemoryClientRepository.js";
import { Client } from "../../../../src/domain/entities/Client.js";
import { randomUUID } from "node:crypto";
//Agrupa todas las pruebas relacionadas con DeleteClientUseCase.
describe("Delete clien use casse", () => {
    //Este test verifica que un cliente NO activo (pending) sí puede eliminarse.
    it("should delete a Pending client successfully", async () => {
        //Se crea un repositorio falso en memoria.
        const repository = new InMemoryClientRepository();
        //crear cliente
        const client = new Client(randomUUID(), "Luis", "luis01", "123456789", "Santo Domingo", "8090000000", "plan-basic");
        //guardar cliente en repositorio
        await repository.save(client);
        //Se instancia el caso de uso. Se le inyecta el repositorio (inyección de dependencias).
        const usecase = new DeleteClientUseCase(repository);
        //ejecutar delete
        await usecase.execute(client.id);
        //Se intenta buscar el cliente eliminado.
        const deletedClient = await repository.findById(client.id);
        //Verifica que el cliente ya no existe
        expect(deletedClient).toBeNull();
    });
    //Verifica que el sistema no permita borrar un cliente inexistente.
    it("should throw if client does not exist", async () => {
        //Repositorio vacío. Caso de uso creado.
        const repository = new InMemoryClientRepository();
        const usecase = new DeleteClientUseCase(repository);
        //Este test asegura validación de existencia.
        await expect(usecase.execute("123"))
            .rejects //La promesa falle (rejects)
            .toThrow("Client not found");
    });
    //Un cliente activo NO puede eliminarse.
    it("should throw if client is ACTIVE", async () => {
        const repository = new InMemoryClientRepository();
        //crear client
        const client = new Client(randomUUID(), "Luis", "luis01", "123456789", "Santo Domingo", "8090000000", "plan-basic");
        //Se cambia su estado a ACTIVE.
        client.activate();
        //guardar
        await repository.save(client);
        //Se crea el caso de uso.
        const usecase = new DeleteClientUseCase(repository);
        await expect(usecase.execute(client.id))
            .rejects
            .toThrow("Active clients cannot be deleted");
    });
});
//# sourceMappingURL=DeleteClientUseCase.test.js.map