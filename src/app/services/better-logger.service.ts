import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { LoggerDependencyService } from './logger-dependency.service';

// {providedIn: 'root'}
@Injectable()
export class BetterLoggerService {
  log!: string;
  constructor(
    private loggerDependency: LoggerDependencyService
  ) {
    this.log =  'better ' + this.loggerDependency.loggerDependency
  }
}
