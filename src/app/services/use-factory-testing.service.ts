import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class UseFactoryTestingService {
  useFactoryLog!: string;
  constructor(
    logger: LoggerService
  ) { 
    this.useFactoryLog = "UseFactoryTestingService: " + logger.log
  }
}