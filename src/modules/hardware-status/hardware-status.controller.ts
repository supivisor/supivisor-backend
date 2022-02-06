import { Controller, Get } from '@nestjs/common';
import { HardwareStatusService } from './hardware-status.service';

@Controller('hardware-status')
export class HardwareStatusController {
  constructor(private hardwareStatusService: HardwareStatusService) {}

  @Get()
  getHardwareStatus(): string {
    this.hardwareStatusService.getHardwareStatus();
    return 'check the console';
  }
}
