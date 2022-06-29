import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HardwareStatusModule } from './modules/hardware-status/hardware-status.module';
import { IndoorConditionsModule } from './modules/indoor-conditions/indoor-conditions.module';
import { HardwareManagementModule } from './modules/hardware-management/hardware-management.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HardwareStatusModule,
    IndoorConditionsModule,
    HardwareManagementModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('app started');
  }
}
