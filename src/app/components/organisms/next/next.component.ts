import { Component, DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss']
})
export class NextComponent implements DoCheck {

  selected: string = "material"
  prevSelected: string = "material"
  @Output() selectedNotify = new EventEmitter<string>();
  // handleChangeSelected(): void {
  //   alert("change")
  //   this.selectedNotify.emit(this.selected)
  // }
  
  ngDoCheck(): void {
    if (this.selected !== this.prevSelected) {
      this.selectedNotify.emit(this.selected)
    }
  }
}
