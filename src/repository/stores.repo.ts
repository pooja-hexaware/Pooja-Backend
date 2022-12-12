import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stores, StoresDocument } from 'src/schemas/stores.schema';

@Injectable()
export class StoresRepo {
    constructor(
        @InjectModel(Stores.name)
        private readonly storesModel: Model<StoresDocument>) {}

    async create(data): Promise<Stores> {
        return new this.storesModel(data).save();
    }

    async findAll(): Promise<Stores[]> {
        return this.storesModel.find({})
            .exec();
    }

    async update(storesId, data): Promise<Stores> {
        const filter = { _id: storesId };
        return this.storesModel.findOneAndUpdate(filter, data);
    }

    async delete(storesId): Promise<Stores> {
        const filter = { _id: storesId };
        return this.storesModel.findByIdAndDelete(storesId);
    }
}