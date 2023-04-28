import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildViewComponent } from 'src/app/components/organisms/child-view/child-view.component';
import { LoggerService } from 'src/app/services/logger-service.service';

@Component({
  selector: 'after-view',
  template: `
    <div>child view begins</div>
      <app-child-view></app-child-view>
    <div>child view ends</div>
    <p *ngIf="comment" class="comment">
      {{comment}}
    </p>
  `
})
export class AfterViewComponent implements  AfterViewChecked, AfterViewInit {
  comment = '';
  private prevHero = '';
  logs;
  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild!: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
    this.logs = logger.logs;
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.logIt('AfterViewInit');
    // if (this.viewChild) {
    //   alert("ngAfterViewInit exist")
    // }
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevHero === this.viewChild.hero) {
      // console.log(this.viewChild.hero)
      this.logIt('AfterViewChecked (no change)');
    } else {
      // console.log("!==", this.viewChild.hero)
      // console.log(this.viewChild.hero)
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    const c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => this.comment = c);
    }
  }

  private logIt(method: string) {
    const child = this.viewChild;
    if (this.viewChild) {
      // console.log("log it", this.viewChild.hero)
    }

    if (child) {
      // console.log("log it child.hero", child.hero)
    }
    const message = `${method}: ${child ? child.hero : 'no'} child view`;
    // console.log("log it message", message)
    this.logger.log(message);
    // console.log("this.logger.logs", this.logger.logs)
  }
  // ...
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/