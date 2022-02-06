export class HardwareStatusCommandParsers {
  static cpuTemperatureMapper = (commandResult: string): number => {
    return parseInt(commandResult);
  };

  static cpuUsageMapper = (commandResult: string): number => {
    const cpuIdle = parseInt(commandResult.split(' ')[1]);
    return 100 - cpuIdle; // CPU load
  };

  static ramUsageMapper = (commandResult: string): number[] => {
    const [ramTotal, ramUsed] = commandResult
      .split(' ')
      .map((val) => parseInt(val));

    return [ramTotal, ramUsed];
  };
}
