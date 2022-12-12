import { Document } from 'mongoose';
export declare type StoresDocument = Stores & Document;
export declare class Stores {
    Store_id: Number;
    Store_name: string;
}
export declare const StoresSchema: import("mongoose").Schema<Document<Stores, any, any>, import("mongoose").Model<Document<Stores, any, any>, any, any>, undefined, {}>;
