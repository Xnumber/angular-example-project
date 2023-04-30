import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

  hero = 'Child21Component';
  @Input() child2Name!: string;
  
  ngDoCheck(): void {
    console.log("this.hero")
    console.log(this.hero)
  }
}
