import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizeFieldsAtRuntimeComponent } from './customize-fields-at-runtime.component';

const routes: Routes = [{ path: '', component: CustomizeFieldsAtRuntimeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizeFieldsAtRuntimeRoutingModule { }
