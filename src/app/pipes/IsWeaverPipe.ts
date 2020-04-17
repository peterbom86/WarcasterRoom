import { Pipe, PipeTransform } from '@angular/core';
import { UnitType, Weaver } from '../models/Unit';

@Pipe({
  name: 'IsWeaver'
})
export class IsWeaverPipe implements PipeTransform {
  transform(value: any): Weaver {
    const IsWeaver = value.unitType === UnitType.Weaver;

    if (IsWeaver) {
      return value as Weaver;
    } else {
      return null;
    }
  }
}
