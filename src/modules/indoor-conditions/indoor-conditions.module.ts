import { Module } from '@nestjs/common';
import { IndoorConditionsService } from './indoor-conditions.service';
import { IndoorConditionsController } from './indoor-conditions.controller';
import { ShellCommandService } from '../shell-command/shell-command.service';

@Module({
  controllers: [IndoorConditionsController],
  providers: [IndoorConditionsService, ShellCommandService],
})
export class IndoorConditionsModule {}
