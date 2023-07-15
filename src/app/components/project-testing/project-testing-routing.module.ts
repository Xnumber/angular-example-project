import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTestingComponent } from './project-testing.component';

const routes: Routes = [{ path: '', component: ProjectTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTestingRoutingModule { }
