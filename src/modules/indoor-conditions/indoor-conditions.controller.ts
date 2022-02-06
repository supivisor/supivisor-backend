import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IndoorConditionsService } from './indoor-conditions.service';

@Controller('indoor-conditions')
export class IndoorConditionsController {
  constructor(private indoorConditionsService: IndoorConditionsService) {}

  @Get()
  getHardwareStatus(): Observable<IndoorConditions> {
    return this.indoorConditionsService.getIndoorConditions();
  }
}
