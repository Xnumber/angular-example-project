import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdChildComponent } from './third-child.component';

const routes: Routes = [{ path: '', component: ThirdChildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdChildRoutingModule { }
