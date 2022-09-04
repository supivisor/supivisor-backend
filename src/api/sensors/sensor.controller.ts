import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Sensor } from './models/schemas/sensor.schema';
import { SensorsService } from './sensors.service';
import { SensorDto } from './models/sensor.dto';

@Controller('sensors')
export class SensorController {
  constructor(private sensorService: SensorsService) {}

  @Get('/all')
  getAllSensors(): Promise<Sensor[]> {
    return this.sensorService.getAllSensors();
  }

  @Post('/add')
  createSensor(@Body() sensorDto: SensorDto): Promise<Sensor> {
    return this.sensorService.createSensor(sensorDto);
  }

  @Get('/:id')
  getSensor(@Param('id') id: number): Promise<Sensor> {
    return this.sensorService.getSensor(id);
  }
}
