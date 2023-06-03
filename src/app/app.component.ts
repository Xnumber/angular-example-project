import { Component } from '@angular/core';
import { of, concat } from 'rxjs';
import { environment } from "src/environments/environment";
import { LoggerDependencyService } from './services/logger-dependency.service';
import { LoggerService } from './services/logger.service';
import { BetterLoggerService } from './services/better-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    LoggerDependencyService,
    // LoggerService,
    BetterLoggerService,
    // { provide: BetterLoggerService, useExisting: BetterLoggerService }
  ],
})

export class AppComponent {
  title = 'angular-example-project';
  fromAppComponent = "fromAppComponent";
  drawerOpenedInAppComponent = false;
  selected: string = "material"
  constructor(
    private logger: BetterLoggerService
  ){}
  ngOnInit() {
    console.log(this.logger.log)
    console.log("environment",environment.testing)
    // const source$ = of(1, 2, 3);
    // source$.subscribe(value => console.log(value));
    // 使用 of 創建一個 Observable，並發送一個值
    const observable1 = of('Hello');

    // 使用 of 創建一個 Observable，並發送一個值
    const observable2 = of('World');

    // 使用 concat 操作符將兩個 Observable 合併成一個新的 Observable
    const newObservable = concat(observable1, observable2);
    // 訂閱新的 Observable
    console.log("a")
    newObservable.subscribe(value => console.log(value));
  }

  onDrawerToggled(e: boolean) {
    this.drawerOpenedInAppComponent = e;
  }
  
  onSelectedNotified(e: string) {
    this.selected = e;
  }
}
