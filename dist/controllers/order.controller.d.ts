import { OrderDto } from "../dto/order-dto.dto";
import { OrderService } from "../services/order.service";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(orderDto: any): Promise<import("../schemas/order.schema").Order>;
    findAll(): Promise<import("../schemas/order.schema").Order[]>;
    update(id: string, orderDto: OrderDto): Promise<import("../schemas/order.schema").Order>;
    delete(id: string): Promise<import("../schemas/order.schema").Order>;
}
