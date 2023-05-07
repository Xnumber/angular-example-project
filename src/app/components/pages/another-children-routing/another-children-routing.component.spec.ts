import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherChildrenRoutingComponent } from './another-children-routing.component';

describe('AnotherChildrenRoutingComponent', () => {
  let component: AnotherChildrenRoutingComponent;
  let fixture: ComponentFixture<AnotherChildrenRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherChildrenRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherChildrenRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
