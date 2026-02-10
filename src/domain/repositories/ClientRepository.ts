//ClientRepository define qué se puede hacer con clientes
//No dice cómo, solo qué. Es una capa intermedia entre:
//🧠 Lógica de negocio y 💾 Persistencia de datos


import { Client } from "../entities/Client.js";

export interface ClientRepository {
    save(client: Client): Promise<void>;
    findById(id: string): Promise<Client | null>;
    findByCedula(cedula: string): Promise<Client | null>
    findAll(): Promise<Client[]>
}

