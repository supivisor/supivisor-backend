import { ShellCommandResult } from '../../shell-command/models/shell-command-result';

export class HardwareStatus {
  cpuTemp: number;
  cpuLoad: number;
  ramTotal: number;
  ramUsed: number;

  constructor(mergedResults: ShellCommandResult<any>[]) {
    this.cpuTemp = mergedResults[0].resultParsed;
    this.cpuLoad = mergedResults[1].resultParsed;
    this.ramTotal = mergedResults[2].resultParsed[0];
    this.ramUsed = mergedResults[2].resultParsed[1];
  }
}
