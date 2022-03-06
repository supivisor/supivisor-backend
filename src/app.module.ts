import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HardwareStatusModule } from './modules/hardware-status/hardware-status.module';
import { IndoorConditionsModule } from './modules/indoor-conditions/indoor-conditions.module';
import { HardwareManagementModule } from './modules/hardware-management/hardware-management.module';

@Module({
  imports: [
    HardwareStatusModule,
    IndoorConditionsModule,
    HardwareManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
