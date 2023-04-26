import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  test: number = 1;

  addTestNumber() {
    this.test += 1;
    console.log(this.test)
  }
}
