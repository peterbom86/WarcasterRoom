import { Unit, HardpointLocation, Warjack } from './models/Unit';
import { WeaponType } from './models/Weapon';

export const UNITS: Unit[] = [
  {
    id: '1',
    name: 'Dusk Wolf',
    unitDescription: 'Marcher Worlds Warjack',
    spd: 5,
    str: 4,
    mat: 4,
    rat: 4,
    def: 3,
    arm: 3,
    deploymentCost: 2,
    baseSize: 50,
    damage: 3,
    hardPoints: [
      { location: HardpointLocation.arm, spots: 2 },
      { location: HardpointLocation.shoulder, spots: 1 }
    ],
    weaponPoints: 5,
    weapons: [
      {
        name: 'Battle Rifle',
        types: [WeaponType.Ballistic],
        rng: 12,
        pow: 4,
        specialRules: [
          {
            name: 'Mechanikal Optics',
            description: 'While this model is charged, this weapon gain +4 RNG.'
          }
        ]
      },
      {
        name: 'Ripper',
        types: [WeaponType.Kinetic],
        rng: 1,
        pow: 4
      },
      {
        name: 'Flamethrower',
        types: [WeaponType.Fire],
        rng: 10,
        pow: 3,
        specialRules: [
          {
            name: 'Fire',
            description: 'This weapon causes fire damage. A model hit by this weapon suffers the fire continuous effect.'
          },
          {
            name: 'Spray Weapon',
            description: 'This is a Spray Weapon.'
          }
        ]
      },
      {
        name: 'Talon Rocket Pod',
        types: [WeaponType.Blast, WeaponType.Explosion],
        rng: 12,
        pow: 4,
        specialRules: [
          {
            name: 'Blast Weapon',
            description: 'This is a Blast Weapon.'
          }
        ]
      },
      {
        name: 'Rail Gun',
        types: [WeaponType.Ballistic],
        rng: 18,
        pow: 5,
        specialRules: [
          {
            name: 'Arc Booster Spike',
            description: 'When attacking with this weapon, before making a damage roll, this model can spike to cause the target of the attack to suffer –1 ARM until the attack is resolved.'
          }
        ]
      }
    ],
    unitImage: 'assets\\MW\\Warjacks\\Dusk_Wolf.png'
  } as Warjack,
  {
    id: '2',
    name: 'Ranger Fire Team',
    unitDescription: 'Marcher Worlds Squad',
    spd: 6,
    mat: 3,
    rat: 3,
    def: 3,
    arm: 3,
    deploymentCost: 2,
    baseSize: 30,
    damage: 1,
    weapons: [
      {
        name: 'Battle Rifle',
        types: [WeaponType.Ballistic],
        rng: 12,
        pow: 4,
        specialRules: [
          {
            name: 'Mechanikal Optics',
            description: 'While this model is charged, this weapon gain +4 RNG.'
          }
        ]
      },
      {
        name: 'Null Detonator',
        types: [WeaponType.Energy],
        rng: 6,
        pow: 0,
        specialRules: [
          {
            name: 'Nullifier',
            description: 'This weapon causes no damage. Instead clear 1 Arc from the unit or void gate hit by this weapon.'
          }
        ]
      },
      {
        name: 'Fusion Blade',
        types: [WeaponType.Kinetic],
        rng: 1,
        pow: 3,
        specialRules: []
      }
    ],
    unitImage: 'assets\\MW\\Squads\\ranger.png'
  }
];
