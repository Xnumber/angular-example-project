import { Component, OnChanges, Input, SimpleChanges, DoCheck } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-on-change-test',
  templateUrl: './on-change-test.component.html',
  styleUrls: ['./on-change-test.component.scss']
})
export class OnChangeTestComponent implements OnChanges, DoCheck{
  @Input('outer-name') name: string | null = null;
  
  innerNameForm = this.formBuilder.group({
    name: "inner name"
  })
  // ngDoCheckName: string = ""
  constructor(private formBuilder: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges): void {
  // ngOnChanges(changes: SimpleChanges): void {
    // console.log("this", this)
    console.log("ngOnChanges", changes)
  }


  ngDoCheck(): void {
    // console.log(this.ngDoCheckName)
    console.log("docheck",this.innerNameForm.value)
  }
}
