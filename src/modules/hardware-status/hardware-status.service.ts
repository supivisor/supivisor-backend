import { Injectable } from '@nestjs/common';
import { ShellCommandService } from '../shell-command/shell-command.service';
import { CommandMappers } from './utils/command-mappers';
import { combineLatest, map, Observable } from 'rxjs';
import { ShellCommandResult } from '../shell-command/models/shell-command-result';
import { HardwareStatus } from './models/hardware-status';

@Injectable()
export class HardwareStatusService extends ShellCommandService {
  //#region Commands
  private readonly READ_RAM_USAGE_WINDOWS_MOCK = 'echo 3874 187';
  private readonly READ_CPU_TEMPERATURE_WINDOWS_MOCK = 'echo 45';
  private readonly READ_CPU_USAGE_WINDOWS_MOCK = 'echo. 92.9 id';
  /** Gets the CPU temperature, for example: 47.2 */
  private readonly READ_CPU_TEMPERATURE_RASPBERRY =
    'vcgencmd measure_temp | egrep -o "[0-9]+.[0-9]+"';
  /** Gets total and free RAM in megabytes, for example: 3789 165 */
  private readonly READ_RAM_USAGE_RASPBERRY =
    'free -m | egrep "[0-9]+" -o | head -n 2 | tr "\n" " " | egrep "[0-9]+ [0-9]+"';
  /** Gets the idle CPU percentage, for example: 96.2 id */
  private readonly READ_CPU_USAGE_RASPBERRY =
    'top -b -n1 | head -n 3 | egrep "\\%Cpu\\(s\\)" | tr "," "\\n" | egrep "[0-9]+\\.[0-9]+.+(id)"';

  // private readonly READ_CPU_TEMPERATURE = this.READ_CPU_TEMPERATURE_RASPBERRY;
  // private readonly READ_RAM_USAGE = this.READ_RAM_USAGE_RASPBERRY;
  // private readonly READ_CPU_USAGE = this.READ_CPU_USAGE_RASPBERRY;
  private readonly READ_CPU_TEMPERATURE =
    this.READ_CPU_TEMPERATURE_WINDOWS_MOCK;
  private readonly READ_RAM_USAGE = this.READ_RAM_USAGE_WINDOWS_MOCK;
  private readonly READ_CPU_USAGE = this.READ_CPU_USAGE_WINDOWS_MOCK;
  //#endregion

  getHardwareStatus(): Observable<HardwareStatus> {
    return combineLatest([
      this.getCpuTemperature(),
      this.getCpuUsage(),
      this.getRamUsage(),
    ]).pipe(map((res) => new HardwareStatus(res)));
  }

  private getCpuTemperature(): Observable<ShellCommandResult<number>> {
    return this.executeCommand<number>(
      this.READ_CPU_TEMPERATURE,
      CommandMappers.cpuTemperatureMapper,
    );
  }

  private getCpuUsage(): Observable<ShellCommandResult<number>> {
    return this.executeCommand<number>(
      this.READ_CPU_USAGE,
      CommandMappers.cpuUsageMapper,
    );
  }

  private getRamUsage(): Observable<ShellCommandResult<number[]>> {
    return this.executeCommand<number[]>(
      this.READ_RAM_USAGE,
      CommandMappers.ramUsageMapper,
    );
  }
}
