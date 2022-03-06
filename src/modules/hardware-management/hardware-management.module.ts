import { Module } from '@nestjs/common';
import { HardwareManagementController } from './hardware-management.controller';
import { ShellCommandService } from '../shell-command/shell-command.service';

@Module({
  controllers: [HardwareManagementController],
  providers: [ShellCommandService],
})
export class HardwareManagementModule {}
