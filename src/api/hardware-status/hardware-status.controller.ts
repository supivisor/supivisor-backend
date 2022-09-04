import { Controller, Get } from '@nestjs/common';
import { HardwareStatusService } from './hardware-status.service';
import { Observable } from 'rxjs';
import { HardwareStatus } from './models/hardware-status';

@Controller('hardware-status')
export class HardwareStatusController {
  constructor(private hardwareStatusService: HardwareStatusService) {}

  @Get()
  getHardwareStatus(): Observable<HardwareStatus> {
    return this.hardwareStatusService.getHardwareStatus();
  }
}
