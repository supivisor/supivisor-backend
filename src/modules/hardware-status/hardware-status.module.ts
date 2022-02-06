import { Module } from '@nestjs/common';
import { HardwareStatusController } from './hardware-status.controller';
import { HardwareStatusService } from './hardware-status.service';
import { ShellCommandService } from '../shell-command/shell-command.service';

@Module({
  controllers: [HardwareStatusController],
  providers: [HardwareStatusService, ShellCommandService],
})
export class HardwareStatusModule {}
