import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { ButtonComponent } from 'src/app/components/atom/button2/button.component';
import { Button2Component } from 'src/app/components/atom/button/button.component';


@NgModule({
  declarations: [
    RxjsComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    Button2Component,
    ButtonComponent
  ]
})
export class RxjsModule { }
