import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevexpressTestingComponent } from './devexpress-testing.component';

const routes: Routes = [{ path: '', component: DevexpressTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevexpressTestingRoutingModule { }
