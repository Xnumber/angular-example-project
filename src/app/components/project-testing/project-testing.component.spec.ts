import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTestingComponent } from './project-testing.component';

describe('ProjectTestingComponent', () => {
  let component: ProjectTestingComponent;
  let fixture: ComponentFixture<ProjectTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
