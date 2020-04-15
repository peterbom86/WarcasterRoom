import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../models/Unit';
import { UnitService } from '../unit.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss']
})
export class UnitCardComponent implements OnInit {
  unit$: Observable<Unit>;

  constructor(
    private unitService: UnitService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.unit$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(this.unitService.getUnit(params.get('unitId')))
      )
    );
  }
}
