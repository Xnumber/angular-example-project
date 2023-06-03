import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherChildrenRoutingRoutingModule } from './another-children-routing-routing.module';
import { AnotherChildrenRoutingComponent } from './another-children-routing.component';
import { TabsComponent } from '../../organisms/tabs/tabs.component';
import { TabItemComponent } from '../../molecules/tab-item/tab-item.component';


@NgModule({
  declarations: [
    AnotherChildrenRoutingComponent,
    TabsComponent,
    TabItemComponent
  ],
  imports: [
    CommonModule,
    AnotherChildrenRoutingRoutingModule
  ]
})
export class AnotherChildrenRoutingModule { }
