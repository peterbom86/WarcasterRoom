import { Weapon } from './Weapon';

export class Unit {
  unitType: UnitType;
  id: string;
  name: string;
  faction: string;
  unitDescription: string;
  spd: number;
  mat: number;
  rat: number;
  def: number;
  arm: number;

  deploymentCost: number;
  baseSize: number;
  damage: number;

  weapons: Weapon[];

  unitImage: string;

  specialRules: SpecialRule[];
}

export class Warjack extends Unit {
  str: number;

  hardPoints: Hardpoint[];
  weaponPoints: number;
  cortex: Cortex[];
}

export class Squad extends Unit {
  // TODO: implement squad size
}

export class Weaver extends Unit {
  focus: number;
}

export enum UnitType {
  Squad,
  Warjack,
  Solo,
  Weaver
}

export class Hardpoint {
  location: HardpointLocation;
  spots: number;
}

export class Cortex {
  name: string;
  specialRules: SpecialRule[];
}

export enum HardpointLocation {
  arm,
  shoulder
}

export class SpecialRule {
  name: string;
  description: string;
}
