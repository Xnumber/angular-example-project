import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavAutosizeExample } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './components/organisms/top-bar/top-bar.component';
// import { ProductListComponent } from './components/product-list/product-list.component';
// import { ProductAlertsComponent } from './components/atoms/product-alerts/product-alerts.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component'; 
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './components/pages/shipping/shipping.component';
import { ReactiveFormsModule  } from "@angular/forms";
import { OnChangeTestComponent } from './components/atoms/on-change-test/on-change-test.component';
import { PeekABooDirective } from './directives/peek-a-boo.directive';
import { LifeCycleComponent } from './components/pages/life-cycle/life-cycle.component';
import { PeekABooParentComponent } from './components/organisms/peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './components/organisms/peek-a-boo/peek-a-boo.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavAutosizeExample,
    HomeComponent,
    TopBarComponent,
    // ProductListComponent,
    // ProductAlertsComponent,
    CartComponent,
    ProductDetailsComponent,
    ShippingComponent,
    OnChangeTestComponent,
    PeekABooDirective,
    LifeCycleComponent,
    PeekABooParentComponent,
    PeekABooComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule {}
