import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangeTestComponent } from './on-change-test.component';

describe('OnChangeTestComponent', () => {
  let component: OnChangeTestComponent;
  let fixture: ComponentFixture<OnChangeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnChangeTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnChangeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
