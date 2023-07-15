import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTestingRoutingModule } from './project-testing-routing.module';
import { ProjectTestingComponent } from './project-testing.component';


@NgModule({
  declarations: [
    ProjectTestingComponent
  ],
  imports: [
    CommonModule,
    ProjectTestingRoutingModule
  ]
})
export class ProjectTestingModule { }
