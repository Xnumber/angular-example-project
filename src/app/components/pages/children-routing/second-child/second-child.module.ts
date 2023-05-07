import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondChildComponent } from './second-child.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SecondChildComponent
  }
]

@NgModule({
  declarations: [
    SecondChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SecondChildModule { }