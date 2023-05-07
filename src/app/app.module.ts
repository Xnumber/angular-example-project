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
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { OnChangeTestComponent } from './components/atoms/on-change-test/on-change-test.component';
import { PeekABooDirective } from './directives/peek-a-boo.directive';
import { LifeCycleComponent } from './components/pages/life-cycle/life-cycle.component';
import { PeekABooParentComponent } from './components/organisms/peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './components/organisms/peek-a-boo/peek-a-boo.component';
import { SpyDirective } from './directives/spy.directive';
import { SpyParentComponent } from './components/organisms/spy/spy.component';
import { OnChangesComponent } from './components/organisms/on-changes/on-changes.component';
import { OnChangesParentComponent } from './components/organisms/on-changes-parent/on-changes-parent.component';
import { DoCheckParentComponent } from './components/organisms/do-check-parent/do-check-parent.component';
import { DoCheckComponent } from './components/organisms/do-check/do-check.component';
import { AfterViewParentComponent } from './components/organisms/after-view-parent/after-view-parent.component';
import { AfterViewComponent } from './components/organisms/after-view/after-view.component';
import { ChildViewComponent } from './components/organisms/child-view/child-view.component';
import { MultipleChildComponent } from './components/molecules/multiple-child/multiple-child.component';
import { ProviderQueryTesting2Directive } from './directives/provider-query-testing2.directive';
import { ProviderQueryTesting3Directive } from './directives/provider-query-testing3.directive';
import { AfterContentParentComponent } from './components/organisms/after-content-parent/after-content-parent.component';
import { AfterContentComponent } from './components/organisms/after-content/after-content.component';
import { ChildComponent } from './components/molecules/child/child.component';
import { Child2Component } from './components/molecules/child2/child2.component';
import { CounterParentComponent } from './components/organisms/counter-parent/counter-parent.component';
import { CounterComponent } from './components/molecules/counter/counter.component';
import { NextComponent } from './components/organisms/next/next.component';
import { TerminalComponent } from './components/organisms/terminal/terminal.component';
import { MessageComponent } from './components/message/message.component';

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
    PeekABooComponent,
    SpyDirective,
    SpyParentComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    MultipleChildComponent,
    ProviderQueryTesting2Directive,
    ProviderQueryTesting3Directive,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    Child2Component,
    CounterParentComponent,
    CounterComponent,
    NextComponent,
    TerminalComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule {}
