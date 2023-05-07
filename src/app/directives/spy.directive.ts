import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../services/logger-service.service';

let nextId = 1;

// Spy on any element to which it is applied.
// Usage: <div appSpy>...</div>
@Directive({selector: '[appSpy]'})
export class SpyDirective implements OnInit, OnDestroy {
  private id = nextId++;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    // console.log("spy init"+ " " + this.id)
    this.logger.log(`Spy #${this.id} onInit`);
  }
  
  ngOnDestroy() {
    // console.log("spy destroy"+ " " + this.id)
    this.logger.log(`Spy #${this.id} onDestroy`);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/