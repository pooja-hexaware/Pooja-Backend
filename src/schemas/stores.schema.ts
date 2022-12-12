import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StoresDocument = Stores & Document;

@Schema()
export class Stores {
   
   @Prop()
   Store_id: Number; 
   
   @Prop()
   Store_name: string; 
   
}

export const StoresSchema = SchemaFactory.createForClass(Stores);