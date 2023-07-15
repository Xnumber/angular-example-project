import { Component, Inject } from '@angular/core';
import { of, concat } from 'rxjs';
import { environment } from "src/environments/environment";
import { LoggerDependencyService } from './services/logger-dependency.service';
import { LoggerService } from './services/logger.service';
import { BetterLoggerService } from './services/better-logger.service';
import { APP_CONFIG, AppConfig, appConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    LoggerDependencyService,
    // LoggerService,
    BetterLoggerService,
    // { provide: BetterLoggerService, useExisting: BetterLoggerService }
    // { provide: "APP_CONFIG" , useValue: appConfig}
    { provide: "APP_CONFIG" , useValue: appConfig }
  ],
})

// 使用這個方式引入參數與直接只用import引入然後使用有什麼區別?
// ChatGPT

// 使用providers提供者和直接使用import引入之間有一些區別。以下是幾個主要的區別：

//     提供者的彈性：使用providers提供者可以更靈活地提供值或實例。你可以根據需要提供不同的實例，包括常數、物件、服務等。這使得你可以動態配置和更改提供的實例。

//     注入的方式：使用providers提供者時，你可以使用注入器（Injector）在建構函式中注入相依性，以便在元件中使用。這使得元件可以更容易地訪問所需的值或實例。另一方面，直接使用import引入的方式需要直接訪問被引入的模組或類別，無法透過注入器來注入。

//     單一實例的共享：使用providers提供者可以在整個應用程式中共享相同的實例。當你在根模組或父模組中提供一個實例時，該實例將在整個應用程式的範圍內共享，可以在不同的元件中存取相同的實例。這可以用於共享狀態、服務等。

//     動態配置：使用providers提供者可以動態配置提供的實例。你可以在不同的模組或元件中根據需要提供不同的實例，這對於模組化和可擴展性非常有用。而直接使用import引入的方式通常是靜態的，無法在運行時進行動態配置。

// 總結而言，使用providers提供者可以提供更靈活和動態的方式來注入相依性和共享實例。它提供了更多的彈性和可配置性，特別適用於大型應用程式或需要共享狀態和設定的情境。然而，如果你只需要簡單地引入和使用某個模組或類別，直接使用import可能更為簡單和直接。

// 有沒有辦法於component中監測使用@Inject與provider與useValue所注入的實體內的值得變化?
// ChatGPT

// 使用@Inject注入的實體是無法直接監測其內部值的變化的。@Inject只是用於將相依性注入到元件中，而不提供值的監測機制。

// 不過，你可以使用其他方法來監測實體內部值的變化。以下是一些可能的方法：

//     使用Getter/Setter：在提供者或實體中添加Getter/Setter方法，以便在值發生變化時觸發自訂的邏輯或通知。然後，在元件中使用該實體時，可以透過Getter方法來獲取值，並在需要時觸發相應的邏輯。

//     使用Subject或BehaviorSubject：如果實體內部的值是可被觀察的，你可以在提供者或實體中使用RxJS的Subject或BehaviorSubject來監測值的變化。在值發生變化時，你可以發出一個事件或發佈新的值，元件可以訂閱這個事件或值來進行相應的處理。

//     使用NgZone：如果實體的值是由非Angular事件觸發的，例如異步操作或第三方庫，你可以使用Angular的NgZone來在變化時觸發變更偵測。這可以通過使用NgZone的run方法來包裹相關的代碼，以確保變化被Angular應用程式所察覺。

// 總的來說，要監測使用@Inject與provider與useValue所注入的實體內的值的變化，需要在提供者或實體中添加相應的邏輯或使用RxJS的Subject/BehaviorSubject或NgZone來處理值的變化。這樣你就可以在元件中監測這些變化並做出相應的處理。

export class AppComponent {
  title = 'angular-example-project';
  fromAppComponent = "fromAppComponent";
  drawerOpenedInAppComponent = false;
  selected: string = "material"
  configTitle: string = ''
  constructor(
    private logger: BetterLoggerService,
    @Inject("APP_CONFIG") config: AppConfig
  ){
    this.configTitle = config.title
  }


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
