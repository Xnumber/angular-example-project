import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderTestingComponent } from './provider-testing.component';

const routes: Routes = [{ path: '', component: ProviderTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderTestingRoutingModule { }
