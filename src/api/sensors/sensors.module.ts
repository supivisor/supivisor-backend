import { Module } from '@nestjs/common';
import { SensorController } from './sensor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sensor, SensorSchema } from './models/schemas/sensor.schema';
import { SensorsService } from './sensors.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sensor.name, schema: SensorSchema }]),
  ],
  controllers: [SensorController],
  providers: [SensorsService],
})
export class SensorsModule {}
