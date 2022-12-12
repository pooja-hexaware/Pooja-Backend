import { Document } from 'mongoose';
export declare type ToppingsDocument = Toppings & Document;
export declare class Toppings {
    Name: string;
    price: Number;
}
export declare const ToppingsSchema: import("mongoose").Schema<Document<Toppings, any, any>, import("mongoose").Model<Document<Toppings, any, any>, any, any>, undefined, {}>;
