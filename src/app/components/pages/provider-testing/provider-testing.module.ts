import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderTestingRoutingModule } from './provider-testing-routing.module';
import { ProviderTestingComponent } from './provider-testing.component';
import { UseExsistingComponent } from '../../organisms/use-exsisting/use-exsisting.component';


@NgModule({
  declarations: [
    ProviderTestingComponent,
    UseExsistingComponent
  ],
  imports: [
    CommonModule,
    ProviderTestingRoutingModule
  ]
})
export class ProviderTestingModule { }
