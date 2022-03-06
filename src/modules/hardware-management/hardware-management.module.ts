import { Module } from '@nestjs/common';
import { HardwareManagementController } from './hardware-management.controller';

@Module({
  controllers: [HardwareManagementController],
})
export class HardwareManagementModule {}
