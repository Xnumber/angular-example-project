import { Component } from '@angular/core';
import { BetterLoggerService } from 'src/app/services/better-logger.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-use-exsisting',
  templateUrl: './use-exsisting.component.html',
  styleUrls: ['./use-exsisting.component.scss'],
  providers: [
    
    // 記憶體快照中，可見會使用已存在的BetterLoggerService實例
    // {
    //   provide: LoggerService, useExisting: BetterLoggerService
    // }
    // 記憶體快照中，比較可見第二個個會依照UseExsistingComponent數量實例化BetterLoggerService
    // BetterLoggerService,
    // 記憶體快照中，比較可見第三個會依照UseExsistingComponent數量實例化BetterLoggerService
    {
        provide: LoggerService, useClass: BetterLoggerService
    }
  ]
})
export class UseExsistingComponent {

  // constructor(private logger: BetterLoggerService){
  constructor(private logger: LoggerService){
    console.log('use-exsisting')
  }
}
