import { Controller, Get } from '@nestjs/common';
import { ShellCommandService } from '../shell-command/shell-command.service';

@Controller('manage')
export class HardwareManagementController {
  private readonly REBOOT = 'sudo reboot';
  private readonly SHUTDOWN = 'sudo poweroff';

  constructor(private commandService: ShellCommandService) {}

  @Get('reboot')
  public reboot(): void {
    this.commandService.executeCommand<undefined>(this.REBOOT);
  }

  @Get('shutdown')
  public shutdown(): void {
    this.commandService.executeCommand<undefined>(this.SHUTDOWN);
  }
}
