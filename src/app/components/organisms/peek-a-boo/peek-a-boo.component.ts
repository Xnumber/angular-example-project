import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { PeekABooDirective } from 'src/app/directives/peek-a-boo.directive';
import { LoggerService } from 'src/app/services/logger-service.service';


@Component({
  selector: 'peek-a-boo',
  template: '<p>Now you see my hero, {{name}}</p>'
})
// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.
export class PeekABooComponent extends PeekABooDirective implements
             OnChanges, OnInit, DoCheck,
             AfterContentInit, AfterContentChecked,
             AfterViewInit, AfterViewChecked,
             OnDestroy {
  @Input() name = '';

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);

    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  // only called for/if there is an @input variable set by parent.
  // ngOnChanges = (changes: SimpleChanges) => {
  ngOnChanges(changes: SimpleChanges) {
    alert("on change in"+JSON.stringify(changes))
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { this.logIt('in DoCheck'); }

  ngAfterContentInit() { this.logIt('AfterContentInit');  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.logIt('AfterContentChecked'); }

  ngAfterViewInit() { this.logIt('AfterViewInit'); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { this.logIt('AfterViewChecked'); console.log("ngAfterViewChecked:peek-a-boo")}

  ngOnDestroy() { this.logIt('OnDestroy'); }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/