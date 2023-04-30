import { Component } from '@angular/core';
import { LoggerService } from 'src/app/services/logger-service.service';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.scss'],
  providers: [LoggerService]
})
export class CounterParentComponent {
  value = 0;
  spyLog: string[] = [];

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
  }

  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log('reset');
    this.value = 0;
    this.logger.tick();
  }
}
