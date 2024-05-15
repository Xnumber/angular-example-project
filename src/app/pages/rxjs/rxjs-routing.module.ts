import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
// import { Button2Component } from 'src/app/components/atom/button/button.component';
// import { ButtonComponent } from 'src/app/components/atom/button2/button.component';

const routes: Routes = [{ path: '', component: RxjsComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
