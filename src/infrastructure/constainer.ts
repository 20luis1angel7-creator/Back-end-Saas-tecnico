import { InMemoryClientRepository } from "./database/repositories/InMemoryClientRepository.js";
import { InMemoryOrderRepository } from "./database/repositories/InMemoryOrderRepository.js";

//singleton manual
export const clientRepository = new InMemoryClientRepository();
export const orderRepository = new InMemoryOrderRepository();

