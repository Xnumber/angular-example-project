import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductAlertsComponent } from '../atoms/product-alerts/product-alerts.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }
];

@NgModule({
	declarations: [
		ProductListComponent,
		ProductAlertsComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class ProductListModule { }