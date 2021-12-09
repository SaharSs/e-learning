import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseVComponent } from './course-v.component';

describe('CourseVComponent', () => {
  let component: CourseVComponent;
  let fixture: ComponentFixture<CourseVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
