import { StoresDto } from '../dto/stores-dto.dto';
import { StoresService } from '../services/stores.service';
export declare class StoresController {
    private readonly storesService;
    constructor(storesService: StoresService);
    create(storesDto: StoresDto): Promise<import("../schemas/stores.schema").Stores>;
    findAll(): Promise<import("../schemas/stores.schema").Stores[]>;
    update(id: string, storesDto: StoresDto): Promise<import("../schemas/stores.schema").Stores>;
    delete(id: string): Promise<import("../schemas/stores.schema").Stores>;
}
