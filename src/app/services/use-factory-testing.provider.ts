import { LoggerService } from "./logger.service";
import { UseFactoryTestingService } from "./use-factory-testing.service";
// https://angular.tw/guide/dependency-injection-providers#factory-providers-usefactory

export const UseFactoryTestingServiceFactory = (logger: LoggerService) =>
  new UseFactoryTestingService(logger);

export const UseFactoryTestingServiceProvider =
{ 
	provide: UseFactoryTestingService,
	useFactory: UseFactoryTestingServiceFactory,
	deps: [LoggerService]
};