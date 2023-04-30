import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ChildComponent } from '../../molecules/child/child.component';
import { LoggerService } from 'src/app/services/logger-service.service';
import { Child2Component } from '../../molecules/child2/child2.component';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.scss']
})

export class AfterContentComponent implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  private prevHero = '';
  comment = '';

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent) contentChild!: ChildComponent;
  @ContentChild(Child2Component) contentChild21!: Child2Component;
  @ContentChild("child22") contentChild22!: Child2Component;
  @ContentChildren(Child2Component) contentChild2List!: QueryList<Child2Component>;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
    // if (this.contentChild21) {
    //   console.log(this.contentChild21.child2Name)
    // }

    // if (this.contentChild22) {
    //   console.log(this.contentChild22.child2Name)
    // }

    // if (this.contentChild2List) {
    //   console.log(this.contentChild2List.map(c2 => c2.child2Name))
    // }
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit: this.contentChild.hero", this.contentChild.hero)  
  }
  
  ngAfterViewChecked(): void {
    // console.log("ngAfterViewChecked: this.contentChild.hero", this.contentChild.hero)
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? "That's a long name" : '';
  }

  private logIt(method: string) {
    const child = this.contentChild;
    const message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
}
