import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONFIG, AppConfig, appConfig } from 'src/app/app.config';
import { BetterLoggerService } from 'src/app/services/better-logger.service';
// import { LoggerDependencyService } from 'src/app/services/logger-dependency.service';
import { LoggerService } from 'src/app/services/logger.service';
import { UseFactoryTestingServiceProvider } from 'src/app/services/use-factory-testing.provider';
import { UseFactoryTestingService } from 'src/app/services/use-factory-testing.service';

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
    // LoggerService,
    { provide: LoggerService, useExisting: BetterLoggerService },
    UseFactoryTestingServiceProvider,
    // { provide: APP_CONFIG , useValue: appConfig}
  ],
})

export class ProviderTestingComponent implements OnInit {
 
  // test: AppConfig2 = new AppConfig2;
  constructor(
    private logger: LoggerService,
    private useFactoryTestingService: UseFactoryTestingService,
    @Inject("APP_CONFIG") config: AppConfig
    ){
    console.log("config.title")
    console.log(config)
    config.title += "123 Modified";
    this.configTitle = config.title;
    // this.test.title = "www"
  }
  // constructor(private logger: BetterLoggerService){}
  configTitle!: string;
  log!: string;
  useFactoryTestingServiceLog!: string
  
  ngOnInit(): void {
      this.log = this.logger.log;
      this.useFactoryTestingServiceLog = this.useFactoryTestingService.useFactoryLog;
  }
}