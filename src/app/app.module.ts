import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavAutosizeExample } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './components/organisms/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/atoms/product-alerts/product-alerts.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    SidenavAutosizeExample,
    HomeComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule {}
