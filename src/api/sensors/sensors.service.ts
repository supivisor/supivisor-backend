import { Injectable } from '@nestjs/common';
import { Sensor, SensorDocument } from './models/schemas/sensor.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { SensorDto } from './models/sensor.dto';

@Injectable()
export class SensorsService {
  constructor(
    @InjectModel(Sensor.name) private sensorModel: Model<SensorDocument>,
  ) {}

  async getSensor(id: number): Promise<Sensor> {
    const isIdValidFormat = Types.ObjectId.isValid(id);
    if (!isIdValidFormat)
      throw new Error('Given ID is not a correct ObjectId value');
    return this.sensorModel.findById(id).exec();
  }

  getAllSensors(): Promise<Sensor[]> {
    return this.sensorModel.find().exec();
  }

  createSensor(sensorDto: SensorDto): Promise<Sensor> {
    const sensor = new this.sensorModel(sensorDto);
    return sensor.save();
  }
}
