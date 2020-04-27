import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-faction-and-points-dialog',
  templateUrl: './select-faction-and-points-dialog.component.html',
  styleUrls: ['./select-faction-and-points-dialog.component.scss']
})
export class SelectFactionAndPointsDialogComponent implements OnInit {
  selectedFaction: string;
  selectedPointlevel: string;

  constructor(
    public dialogRef: MatDialogRef<SelectFactionAndPointsDialogComponent>
  ) {}

  ngOnInit(): void {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
