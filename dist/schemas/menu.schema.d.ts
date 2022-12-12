import { Document } from 'mongoose';
export declare type MenuDocument = Menu & Document;
export declare class Menu {
    Menu_name: string;
    Menu_Description: string;
    Menu_price: Number;
}
export declare const MenuSchema: import("mongoose").Schema<Document<Menu, any, any>, import("mongoose").Model<Document<Menu, any, any>, any, any>, undefined, {}>;
