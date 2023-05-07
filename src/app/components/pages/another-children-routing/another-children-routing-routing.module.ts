import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherChildrenRoutingComponent } from './another-children-routing.component';

const routes: Routes = [{ path: '', component: AnotherChildrenRoutingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotherChildrenRoutingRoutingModule { }
