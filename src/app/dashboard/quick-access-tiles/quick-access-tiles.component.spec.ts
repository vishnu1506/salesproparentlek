import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAccessTilesComponent } from './quick-access-tiles.component';

describe('QuickAccessTilesComponent', () => {
  let component: QuickAccessTilesComponent;
  let fixture: ComponentFixture<QuickAccessTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickAccessTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAccessTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
