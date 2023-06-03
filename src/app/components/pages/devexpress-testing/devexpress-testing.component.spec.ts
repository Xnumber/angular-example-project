import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevexpressTestingComponent } from './devexpress-testing.component';

describe('DevexpressTestingComponent', () => {
  let component: DevexpressTestingComponent;
  let fixture: ComponentFixture<DevexpressTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevexpressTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevexpressTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
