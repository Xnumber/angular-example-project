import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChildComponent } from './multiple-child.component';

describe('MultipleChildComponent', () => {
  let component: MultipleChildComponent;
  let fixture: ComponentFixture<MultipleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
