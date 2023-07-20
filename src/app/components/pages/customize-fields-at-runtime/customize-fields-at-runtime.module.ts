import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizeFieldsAtRuntimeRoutingModule } from './customize-fields-at-runtime-routing.module';
import { CustomizeFieldsAtRuntimeComponent } from './customize-fields-at-runtime.component';
import { DxFormModule, DxSelectBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    CustomizeFieldsAtRuntimeComponent
  ],
  imports: [
    CommonModule,
    CustomizeFieldsAtRuntimeRoutingModule,
    DxFormModule,
    DxSelectBoxModule
  ]
})
export class CustomizeFieldsAtRuntimeModule { }
