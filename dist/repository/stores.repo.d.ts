import { Model } from 'mongoose';
import { Stores, StoresDocument } from 'src/schemas/stores.schema';
export declare class StoresRepo {
    private readonly storesModel;
    constructor(storesModel: Model<StoresDocument>);
    create(data: any): Promise<Stores>;
    findAll(): Promise<Stores[]>;
    update(storesId: any, data: any): Promise<Stores>;
    delete(storesId: any): Promise<Stores>;
}
