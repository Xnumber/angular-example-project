import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements DoCheck {

  hero = 'Magneta';
  ngDoCheck(): void {
    // console.log("this.hero")
    // console.log(this.hero)
  }
}
