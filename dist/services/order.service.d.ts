import { OrderRepo } from '../repository/order.repo';
import { Order } from '../schemas/order.schema';
export declare class OrderService {
    private readonly orderRepo;
    constructor(orderRepo: OrderRepo);
    findAll(): Promise<Order[]>;
    create(data: any): Promise<Order>;
    update(orderId: any, data: any): Promise<Order>;
    delete(orderId: any): Promise<Order>;
}
