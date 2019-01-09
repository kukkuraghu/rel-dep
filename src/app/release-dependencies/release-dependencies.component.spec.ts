import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDependenciesComponent } from './release-dependencies.component';

describe('ReleaseDependenciesComponent', () => {
  let component: ReleaseDependenciesComponent;
  let fixture: ComponentFixture<ReleaseDependenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseDependenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
