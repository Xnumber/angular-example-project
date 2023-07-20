import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeFieldsAtRuntimeComponent } from './customize-fields-at-runtime.component';

describe('CustomizeFieldsAtRuntimeComponent', () => {
  let component: CustomizeFieldsAtRuntimeComponent;
  let fixture: ComponentFixture<CustomizeFieldsAtRuntimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeFieldsAtRuntimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeFieldsAtRuntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
