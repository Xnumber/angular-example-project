import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTestingComponent } from './provider-testing.component';

describe('ProviderTestingComponent', () => {
  let component: ProviderTestingComponent;
  let fixture: ComponentFixture<ProviderTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
