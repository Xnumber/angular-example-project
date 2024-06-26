import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenRoutingComponent } from './children-routing.component';

describe('ChildrenRoutingComponent', () => {
  let component: ChildrenRoutingComponent;
  let fixture: ComponentFixture<ChildrenRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
