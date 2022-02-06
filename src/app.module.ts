import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HardwareStatusModule } from './modules/hardware-status/hardware-status.module';
import { IndoorConditionsModule } from './modules/indoor-conditions/indoor-conditions.module';

@Module({
  imports: [HardwareStatusModule, IndoorConditionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
