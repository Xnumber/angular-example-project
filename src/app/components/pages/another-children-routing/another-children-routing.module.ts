import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherChildrenRoutingRoutingModule } from './another-children-routing-routing.module';
import { AnotherChildrenRoutingComponent } from './another-children-routing.component';


@NgModule({
  declarations: [
    AnotherChildrenRoutingComponent
  ],
  imports: [
    CommonModule,
    AnotherChildrenRoutingRoutingModule
  ]
})
export class AnotherChildrenRoutingModule { }
