import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseSelectionComponent } from './release-selection.component';

describe('ReleaseSelectionComponent', () => {
  let component: ReleaseSelectionComponent;
  let fixture: ComponentFixture<ReleaseSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
