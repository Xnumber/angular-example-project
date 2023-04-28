import { Component, ViewChildren, QueryList, AfterViewInit  } from '@angular/core';
import { LoggerService } from 'src/app/services/logger-service.service';
import { MultipleChildComponent } from '../../molecules/multiple-child/multiple-child.component';
@Component({
  selector: 'after-view-parent',
  template: `
  <h2>AfterView</h2>

  <after-view  *ngIf="show"></after-view>

  <div class="info">
    <h3>AfterView Logs</h3>
    <button type="button" (click)="reset()">Reset</button>
    <div *ngFor="let msg of logger.logs" class="log">{{msg}}</div>
  </div>

  <ng-container *ngFor="let t of testN">
    <app-multiple-child *ngIf="t < 3" [n]="t">
    </app-multiple-child>
  </ng-container>

  `,
  providers: [LoggerService]
})
export class AfterViewParentComponent implements AfterViewInit {
  show = true;
  testN = [1,2,3, 4, 5, 6]
  @ViewChildren(MultipleChildComponent) viewChildren!: QueryList<MultipleChildComponent>;
  constructor(public logger: LoggerService) { }

  ngAfterViewInit(): void {
      if(this.viewChildren) {
        console.log("this.viewChildren.map(c => c.n)")
        console.log(this.viewChildren.map(c => c.n))
      }
  }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/