import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from 'src/app/components/pages/cart/cart.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ShippingComponent } from './components/pages/shipping/shipping.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'member', loadChildren: () => import("./member/member.module").then(m => m.MemberRoutingModule) },
  // { path: 'member', component: MemberComponent },
  // { path: 'product-list', component: ProductListComponent },
  { path: 'product-list', loadChildren: () => import("./components/product-list/product-list.module").then(m => m.ProductListModule) },
  { path: 'cart', component: CartComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }