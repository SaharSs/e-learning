import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCoursesComponent } from './ad-courses.component';

describe('AdCoursesComponent', () => {
  let component: AdCoursesComponent;
  let fixture: ComponentFixture<AdCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
