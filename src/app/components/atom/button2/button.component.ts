import { Component, OnInit } from '@angular/core';
import { BactchService } from 'src/app/services/batch.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true
})
export class ButtonComponent implements OnInit{
  constructor(
    private batch: BactchService
  ) {
    // this.batch
  }

  ngOnInit(): void {
    this.batch.getData(true).subscribe((e) => {
      console.log('e ditto')
      console.log(e)
    })
  }
}
