import { Document } from "mongoose";
export declare type OrderDocument = Order & Document;
export declare class Order {
    Order_id: Number;
    total_amount: Number;
    date: Date;
    status: String;
    name: String;
    postalCode: String;
    city: String;
    phone: String;
}
export declare const OrderSchema: import("mongoose").Schema<Document<Order, any, any>, import("mongoose").Model<Document<Order, any, any>, any, any>, undefined, {}>;
