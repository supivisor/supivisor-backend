import { Module } from '@nestjs/common';
import { ShellCommandService } from './shell-command.service';

@Module({
  providers: [ShellCommandService],
})
export class ShellCommandModule {}
