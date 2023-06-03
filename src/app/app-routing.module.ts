import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from 'src/app/components/pages/cart/cart.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ShippingComponent } from './components/pages/shipping/shipping.component';
import { LifeCycleComponent } from './components/pages/life-cycle/life-cycle.component';
import { MessageComponent } from './components/message/message.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'member', loadChildren: () => import("./member/member.module").then(m => m.MemberRoutingModule) },
  // { path: 'member', component: MemberComponent },
  // { path: 'product-list', component: ProductListComponent },
  { path: 'product-list', loadChildren: () => import("./components/product-list/product-list.module").then(m => m.ProductListModule) },
  { path: 'cart', component: CartComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'life-cycle', component: LifeCycleComponent },
  { path: 'message', component: MessageComponent },
  { 
    path: 'children-routing',
    loadChildren: () => import("src/app/components/pages/children-routing/children-routing.module").then(m => m.ChildrenRoutingModule),
  },
  { path: 'another-children-routing', loadChildren: () => import('./components/pages/another-children-routing/another-children-routing.module').then(m => m.AnotherChildrenRoutingModule) },
  { path: 'devexpress-testing', loadChildren: () => import('./components/pages/devexpress-testing/devexpress-testing.module').then(m => m.DevexpressTestingModule) },
  { path: 'provider-testing', loadChildren: () => import('./components/pages/provider-testing/provider-testing.module').then(m => m.ProviderTestingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }