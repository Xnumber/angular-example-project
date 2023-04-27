import { Component, ViewChild } from '@angular/core';
import { DoCheckComponent } from '../do-check/do-check.component';
import { Hero } from '../on-changes/hero';

@Component({
  selector: 'do-check-parent',
  templateUrl: './do-check-parent.component.html'
})
export class DoCheckParentComponent {
  hero!: Hero;
  power = '';
  title = 'DoCheck';
  @ViewChild('child1') childView1!: DoCheckComponent;
  @ViewChild('child2') childView2!: DoCheckComponent;

  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('Windstorm');
    // this.power = 'sing';
    if (this.childView1) {
      this.childView1.alertTest()
      this.childView2.alertTest()
      this.childView1.reset();
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/