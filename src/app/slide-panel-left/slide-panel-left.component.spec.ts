import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePanelLeftComponent } from './slide-panel-left.component';

describe('SlidePanelLeftComponent', () => {
  let component: SlidePanelLeftComponent;
  let fixture: ComponentFixture<SlidePanelLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePanelLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePanelLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
