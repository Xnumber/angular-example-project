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
  selected: string = "material"
  
  onDrawerToggled(e: boolean) {
    this.drawerOpenedInAppComponent = e;
  }
  
  onSelectedNotified(e: string) {
    this.selected = e;
  }
}
