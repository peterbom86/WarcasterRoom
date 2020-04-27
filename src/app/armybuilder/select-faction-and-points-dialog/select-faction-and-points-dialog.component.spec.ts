import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFactionAndPointsDialogComponent } from './select-faction-and-points-dialog.component';

describe('SelectFactionAndPointsDialogComponent', () => {
  let component: SelectFactionAndPointsDialogComponent;
  let fixture: ComponentFixture<SelectFactionAndPointsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFactionAndPointsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFactionAndPointsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
