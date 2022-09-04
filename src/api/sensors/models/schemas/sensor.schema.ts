import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SensorDocument = Sensor & Document;

@Schema()
export class Sensor {
  @Prop({ required: true })
  name: string;
}

export const SensorSchema = SchemaFactory.createForClass(Sensor);
