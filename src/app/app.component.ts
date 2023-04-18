import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-example-project';
  fromAppComponent = "fromAppComponent";
  drawerOpenedInAppComponent = false;
  onDrawerToggled(e: boolean) {
    this.drawerOpenedInAppComponent = e;
  }
}