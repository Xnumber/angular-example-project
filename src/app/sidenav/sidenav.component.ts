import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
})

export class SidenavAutosizeExample {
  showFiller = false;
  drawerOpened = false;
  @Input() fromAppComponent!: string;
  @Output() notify = new EventEmitter<boolean>();
  className = "test-class-name";
  emitDrawerToggled = () => {
    this.notify.emit(this.drawerOpened);
  }
}
