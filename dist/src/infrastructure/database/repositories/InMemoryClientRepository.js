export class InMemoryClientRepository {
    clients = []; // esta es la memoria(array)
    async save(client) {
        const existingIndex = this.clients.findIndex(c => c.id === client.id);
        if (existingIndex >= 0) {
            this.clients[existingIndex] = client;
        }
        else {
            this.clients.push(client);
        }
    }
    async findById(id) {
        return this.clients.find(c => c.id === id) || null;
    }
    async findByCedula(cedula) {
        return this.clients.find(c => c.cedula === cedula) || null;
    }
    async findAll() {
        return this.clients;
    }
    //eliminar
    async delete(id) {
        const index = this.clients.findIndex(c => c.id === id);
        if (index >= 0) {
            this.clients.splice(index, 1);
        }
    }
}
//# sourceMappingURL=InMemoryClientRepository.js.map