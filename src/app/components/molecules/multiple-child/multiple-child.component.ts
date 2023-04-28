import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-child',
  templateUrl: './multiple-child.component.html',
  styleUrls: ['./multiple-child.component.scss']
})


export class MultipleChildComponent {
  @Input() n!: number;
  @Input() testName!: string;
}
