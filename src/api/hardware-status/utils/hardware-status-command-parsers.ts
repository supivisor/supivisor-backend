export class HardwareStatusCommandParsers {
  static parseCpuTemperature = (commandResult: string): number => {
    return parseInt(commandResult);
  };

  static parseCpuUsage = (commandResult: string): number => {
    const cpuIdle = parseInt(commandResult.split(' ')[1]);
    return 100 - cpuIdle; // CPU load
  };

  static parseRamUsage = (commandResult: string): number[] => {
    const [ramTotal, ramUsed] = commandResult
      .split(' ')
      .map((val) => parseInt(val));

    return [ramTotal, ramUsed];
  };
}
