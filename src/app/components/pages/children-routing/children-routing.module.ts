import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenRoutingComponent } from './children-routing.component';

const routes: Routes = [
  {
    path: '',
    component: ChildrenRoutingComponent,
     children: [
      {
        path: "first-child",
        loadChildren: () => import("src/app/components/pages/children-routing/first-child/first-child.module").then(m => m.FirstChildModule)
      },
      {
        path: "second-child",
        loadChildren: () => import("src/app/components/pages/children-routing/second-child/second-child.module").then(m => m.SecondChildModule)
      },
      { 
        path: 'third-child', 
        loadChildren: () => import('./third-child/third-child.module').then(m => m.ThirdChildModule) 
      }
    ]
  },
]

@NgModule({
  declarations: [
    ChildrenRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }