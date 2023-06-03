import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseExsistingComponent } from './use-exsisting.component';

describe('UseExsistingComponent', () => {
  let component: UseExsistingComponent;
  let fixture: ComponentFixture<UseExsistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseExsistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseExsistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
