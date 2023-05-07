import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstChildComponent } from './first-child.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FirstChildComponent
  }
]

@NgModule({
  declarations: [
    FirstChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FirstChildModule { }
