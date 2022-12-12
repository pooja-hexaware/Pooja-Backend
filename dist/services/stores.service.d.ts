import { StoresRepo } from '../repository/stores.repo';
import { Stores } from '../schemas/stores.schema';
export declare class StoresService {
    private readonly storesRepo;
    constructor(storesRepo: StoresRepo);
    findAll(): Promise<Stores[]>;
    create(data: any): Promise<Stores>;
    update(storesId: any, data: any): Promise<Stores>;
    delete(storesId: any): Promise<Stores>;
}
