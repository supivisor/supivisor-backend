import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HardwareStatusModule } from './modules/hardware-status/hardware-status.module';

@Module({
  imports: [HardwareStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
