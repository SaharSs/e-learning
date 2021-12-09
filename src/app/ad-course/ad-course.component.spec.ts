import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCourseComponent } from './ad-course.component';

describe('AdCourseComponent', () => {
  let component: AdCourseComponent;
  let fixture: ComponentFixture<AdCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
