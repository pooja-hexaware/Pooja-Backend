import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/schemas/order.schema';
export declare class OrderRepo {
    private readonly orderModel;
    constructor(orderModel: Model<OrderDocument>);
    create(data: any): Promise<Order>;
    findAll(): Promise<Order[]>;
    update(orderId: any, data: any): Promise<Order>;
    delete(orderId: any): Promise<Order>;
}
