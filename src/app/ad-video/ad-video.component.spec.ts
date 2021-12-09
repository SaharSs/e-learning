import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdVideoComponent } from './ad-video.component';

describe('AdVideoComponent', () => {
  let component: AdVideoComponent;
  let fixture: ComponentFixture<AdVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
