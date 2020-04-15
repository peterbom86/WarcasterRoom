export class Weapon {
  name: string;
  types: WeaponType[];
  rng: number;
  pow: number;
  specialRules: WeaponSpecielRule[];
}

export enum WeaponType {
  Ballistic = 'Ballistic',
  Kinetic = 'Kinetic',
  Fire = 'Fire',
  Blast = 'Blast',
  Explosion = 'Explosion',
  Energy = 'Energy'
}

export class WeaponSpecielRule {
  name: string;
  description: string;
}
