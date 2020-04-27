import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmybuilderComponent } from './armybuilder.component';

describe('ArmybuilderComponent', () => {
  let component: ArmybuilderComponent;
  let fixture: ComponentFixture<ArmybuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmybuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmybuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
