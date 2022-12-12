import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoresController } from '../controllers/stores.controller';
import { StoresService } from '../services/stores.service';
import { StoresRepo } from '../repository/stores.repo';
import { Stores, StoresSchema } from '../schemas/stores.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Stores.name, schema: StoresSchema }])
    ],
    controllers: [StoresController],
    providers: [StoresService, StoresRepo],
    exports: [StoresService, StoresRepo]
  })
  export class StoresModule { }