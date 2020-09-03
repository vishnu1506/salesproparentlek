import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileSliderComponent } from './user-profile-slider.component';

describe('UserProfileSliderComponent', () => {
  let component: UserProfileSliderComponent;
  let fixture: ComponentFixture<UserProfileSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
