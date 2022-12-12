import { Injectable } from '@nestjs/common';
import { StoresRepo } from '../repository/stores.repo';
import { Stores } from '../schemas/stores.schema';

@Injectable()
export class StoresService {
    constructor(
        private readonly storesRepo: StoresRepo
    ) { }

    async findAll(): Promise<Stores[]> {
        return this.storesRepo.findAll();
    }

    async create(data): Promise<Stores> {
        data.createddate = new Date();
        return this.storesRepo.create(data);
    }

    async update(storesId, data): Promise<Stores> {
        return this.storesRepo.update(storesId, data);
    }

    async delete(storesId): Promise<Stores> {
        return this.storesRepo.delete(storesId);
    }
}