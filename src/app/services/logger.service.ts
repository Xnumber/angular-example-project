import { Injectable } from '@angular/core';
import { LoggerDependencyService } from './logger-dependency.service';

// {providedIn: 'root'}
@Injectable()
export class LoggerService {
  log: string = "";
  constructor(
    private loggerDependency: LoggerDependencyService
  ) { 
    this.log = this.loggerDependency.loggerDependency;
  }
}