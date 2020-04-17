import { Injectable } from '@angular/core';
import { Unit } from './models/Unit';
import { UNITS } from './UnitsDB';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor() { }

  getUnit(unitId: string): Unit {
    const unit = UNITS.find(u => u.id === unitId);
    return unit;
  }
}
