import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from "./member/member.component";
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from 'src/app/components/pages/cart/cart.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'member', component: MemberComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }