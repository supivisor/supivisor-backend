import { Module } from '@nestjs/common';
import { HardwareStatusController } from './hardware-status.controller';
import { HardwareStatusService } from './hardware-status.service';

@Module({
  controllers: [HardwareStatusController],
  providers: [HardwareStatusService],
})
export class HardwareStatusModule {}
