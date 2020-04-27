import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectFactionAndPointsDialogComponent } from './select-faction-and-points-dialog/select-faction-and-points-dialog.component';
import { Unit } from '../models/Unit';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-armybuilder',
  templateUrl: './armybuilder.component.html',
  styleUrls: ['./armybuilder.component.scss'],
})
export class ArmybuilderComponent implements OnInit {
  constructor(public dialog: MatDialog, private unitService: UnitService) {}

  factionAndPoints: { faction: string; points: string };

  availableUnits: Unit[];
  selectedUnits: Unit[];

  ngOnInit(): void {
    this.factionAndPoints = { faction: 'MW', points: '1' };
    this.availableUnits = this.unitService.getUnitsFrom('MW');
  }

  createArmy() {
    const dialogRef = this.dialog.open(SelectFactionAndPointsDialogComponent);

    dialogRef
      .afterClosed()
      .subscribe((result: { faction: string; points: string }) => {
        this.factionAndPoints = result;
        this.availableUnits = this.unitService.getUnitsFrom(result.faction);
      });
  }
}
