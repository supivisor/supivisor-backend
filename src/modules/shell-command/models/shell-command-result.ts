export interface ShellCommandResult<T> {
  success: boolean;
  result: string;
  resultParsed?: T;
  error: string;
}
