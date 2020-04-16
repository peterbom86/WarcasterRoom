import { Weapon } from './Weapon';

export class Unit {
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
}

export class Warjack extends Unit {
  str: number;

  hardPoints: Hardpoint[];
  weaponPoints: number;
}

export class Squad extends Unit {
  // TODO: implement squad size
}

export class Hardpoint {
  location: HardpointLocation;
  spots: number;
}

export enum HardpointLocation {
  arm,
  shoulder
}
