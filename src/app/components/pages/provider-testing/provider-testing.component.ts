import { Component, OnInit } from '@angular/core';
import { BetterLoggerService } from 'src/app/services/better-logger.service';
import { LoggerDependencyService } from 'src/app/services/logger-dependency.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-provider-testing',
  templateUrl: './provider-testing.component.html',
  styleUrls: ['./provider-testing.component.scss'],
  
  // LoggerService有LoggerDependencyService注入
  // providers: [
  //   LoggerDependencyService,
  //   LoggerService
  // ]

  // BetterLoggerService有LoggerDependencyService注入
  // providers: [
    //   LoggerDependencyService,
    //   BetterLoggerService
    // ],
    
  // providers: [
  //   LoggerDependencyService,
  //   { provide: LoggerService, useClass: LoggerService }
  // ],

  // 具有相同屬性的類別，使用不同的class
  // https://angular.tw/guide/dependency-injection-providers#class-providers-useclass
  // providers: [
    //   LoggerDependencyService,
    //   { provide: LoggerService, useClass: BetterLoggerService }
    // ],
    
    
  // 具有相同屬性的類別，使用已經存在的實體
  // https://angular.tw/guide/dependency-injection-providers#alias-providers-useexisting
  providers: [
    { provide: LoggerService, useExisting: BetterLoggerService }
  ],
})

export class ProviderTestingComponent implements OnInit {
  constructor(private logger: LoggerService){}
  // constructor(private logger: BetterLoggerService){}
  log!: string;
  ngOnInit(): void {
      this.log = this.logger.log;
  }
}