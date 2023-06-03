import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevexpressTestingRoutingModule } from './devexpress-testing-routing.module';
import { DevexpressTestingComponent } from './devexpress-testing.component';
import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DevexpressTestingComponent
  ],
  imports: [
    CommonModule,
    DevexpressTestingRoutingModule,
    FormsModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule
  ]
})
export class DevexpressTestingModule { }
