export class IndoorConditionsCommandParsers {
  static parseWeatherData = (commandResult: string): IndoorConditions => {
    const [temperature, pressure, humidity] = commandResult.split(';');
    return {
      temperature: parseInt(temperature),
      pressure: parseInt(pressure),
      humidity: parseInt(humidity),
    } as IndoorConditions;
  };
}
