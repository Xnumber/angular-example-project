import { Component } from '@angular/core';
import { BactchService } from 'src/app/services/batch.service';

@Component({
  selector: 'app-button-2',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true
})
export class Button2Component {
  constructor(
    private batch: BactchService
  ) {
    // this.batch
  }

  ngOnInit(): void {
    this.batch.getData(true).subscribe()
  }
}
