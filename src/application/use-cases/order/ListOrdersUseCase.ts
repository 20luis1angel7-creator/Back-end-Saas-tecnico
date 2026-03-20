import { Order } from "../../../domain/entities/Order.js";
import { OrderRepository } from "../../../domain/repositories/OrderRepository.js";


export class ListOrdersUseCase {
    constructor(
        private readonly oredrRepository: OrderRepository
    ) {}

    async execute(): Promise<Order[]>{
        return this.oredrRepository.findAll();
    }
}