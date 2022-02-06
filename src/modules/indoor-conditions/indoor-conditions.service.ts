import { Injectable } from '@nestjs/common';
import { ShellCommandService } from '../shell-command/shell-command.service';
import { map, Observable } from 'rxjs';
import { IndoorConditionsCommandParsers } from './utils/command-mappers';

@Injectable()
export class IndoorConditionsService {
  //#region Commands
  private readonly READ_INDOOR_CONDITIONS_WINDOWS_MOCK =
    'echo 23.9612019609;943.062742733;58.3099279023';
  /** Gets the weater data: temperature, pressure and humidity for example: 23.9612019609;943.062742733;58.3099279023 */
  private readonly READ_INDOOR_CONDITIONS_RASPBERRY =
    'python ~/Projects/indoor-temperature-monitor/indoor-temperature.py';

  private readonly READ_INDOOR_CONDITIONS =
    this.READ_INDOOR_CONDITIONS_WINDOWS_MOCK;
  // private readonly READ_WEATHER = this.READ_WEATHER_WINDOWS_MOCK;
  //#endregion

  constructor(private shellCommandService: ShellCommandService) {}

  getIndoorConditions(): Observable<IndoorConditions> {
    return this.getWeatherData();
  }

  private getWeatherData(): Observable<IndoorConditions> {
    return this.shellCommandService
      .executeCommand<IndoorConditions>(
        this.READ_INDOOR_CONDITIONS,
        IndoorConditionsCommandParsers.parseWeatherData,
      )
      .pipe(map((commandResult) => commandResult.resultParsed));
  }
}
