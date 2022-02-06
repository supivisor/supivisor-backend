import { Injectable } from '@nestjs/common';
import * as shell from 'child_process';
import { ShellCommandResult } from './models/shell-command-result';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ShellCommandService {
  executeCommand<T>(
    command: string,
    resultMapper: (result: string) => T,
  ): Observable<ShellCommandResult<T>> {
    const shellResult = new Subject<ShellCommandResult<T>>();

    shell.exec(
      command,
      this.getCommandResultHandler<T>(shellResult, resultMapper),
    );

    return shellResult;
  }

  private getCommandResultHandler<T>(
    resultObservable: Subject<ShellCommandResult<T>>,
    mapper: (result: string) => T,
  ) {
    return (
      error: shell.ExecException | null,
      stdout: string,
      stderr: string,
    ): void => {
      const shellCommandResult =
        ShellCommandService.createShellCommandResult<T>(error, stdout, stderr);
      if (shellCommandResult.success) {
        shellCommandResult.resultParsed = mapper(shellCommandResult.result);
      }
      resultObservable.next(shellCommandResult);
      resultObservable.complete();
    };
  }

  private static createShellCommandResult<T>(
    error: shell.ExecException | null,
    stdout: string,
    stderr: string,
  ): ShellCommandResult<T> {
    return {
      success: !(error || stderr),
      result: stdout,
      error: error || stderr,
    } as ShellCommandResult<T>;
  }
}
