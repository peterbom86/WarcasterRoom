import { Pipe, PipeTransform } from '@angular/core';
import { UnitType, Warjack } from '../models/Unit';

@Pipe({
  name: 'IsWarjack'
})
export class IsWarjackPipe implements PipeTransform {
  transform(value: any): Warjack {
    const isWarjack = value.unitType === UnitType.Warjack;

    if (isWarjack) {
      return value as Warjack;
    } else {
      return null;
    }
  }
}
