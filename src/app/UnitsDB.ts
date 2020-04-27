import {
  Unit,
  HardpointLocation,
  Warjack,
  UnitType,
  Weaver
} from './models/Unit';
import { WeaponType } from './models/Weapon';

export const UNITS: Unit[] = [
  {
    unitType: UnitType.Warjack,
    id: '1',
    name: 'Dusk Wolf',
    faction: 'MW',
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
            description:
              'This weapon causes fire damage. A model hit by this weapon suffers the fire continuous effect.'
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
            description:
              'When attacking with this weapon, before making a damage roll, this model can spike to cause the target of the attack to suffer –1 ARM until the attack is resolved.'
          }
        ]
      }
    ],
    unitImage: 'assets\\MW\\Warjacks\\Dusk_Wolf.png',
    specialRules: [
      {
        name: 'Arcantrik Turbine Charge',
        description:
          'This model gains +1 SPD for each Arc it is currently charged with.'
      },
      {
        name: 'Slip Displacer Spike',
        description:
          'Once per activation, this model can spike to move up to 3.'
      }
    ],
    cortex: [
      {
        name: 'Neural	Net	Cortex',
        specialRules: [
          {
            name: 'Neural Net',
            description:
              'This model gains a cumulative +1 DEF bonus for each other friendly unit within 5˝, up to a bonus of +3.'
          }
        ]
      },
      {
        name: 'Scout	Cortex',
        specialRules: [
          {
            name: 'Pathfinder',
            description:
              'This model ignores movement penalties for rough terrain.'
          },
          {
            name: 'Smart Lock Charge',
            description:
              'While charged, this model ignores cover when making a ranged attack.'
          }
        ]
      }
    ]
  } as Warjack,
  {
    unitType: UnitType.Squad,
    id: '2',
    name: 'Ranger Fire Team',
    faction: 'MW',
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
            description:
              'This weapon causes no damage. Instead clear 1 Arc from the unit or void gate hit by this weapon.'
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
    unitImage: 'assets\\MW\\Squads\\ranger.png',
    specialRules: [
      {
        name: 'Slip Displacer Spike',
        description:
          'Once per activation, this squad can spike to move up to 3.'
      }
    ]
  },
  {
    unitType: UnitType.Weaver,
    id: '3',
    name: 'Coalition Weaver',
    faction: 'MW',
    unitDescription: 'Marcher Worlds Solo',
    spd: 6,
    mat: 3,
    rat: 3,
    def: 4,
    arm: 3,
    focus: 4,
    deploymentCost: 1,
    baseSize: 30,
    damage: 2,
    weapons: [
      {
        name: 'Hand Gun',
        types: [WeaponType.Ballistic],
        rng: 8,
        pow: 3,
        specialRules: []
      },
      {
        name: 'Battle Staff',
        types: [WeaponType.Kinetic],
        rng: 1,
        pow: 4,
        specialRules: [
          {
            name: 'Repulsor',
            description:
              'When this model hits a model with an equal or smaller sized-base with an attack with this weapon, before damage is rolled, the model hit is slammed 3˝ directly away from this model. Collateral damage is equal to the POW of this weapon.'
          }
        ]
      }
    ],
    unitImage: 'assets\\MW\\Squads\\ranger.png',
    specialRules: [
      {
        name: 'Arcantrik Amplifier Charge',
        description:
          'While this model is charged, Fury Cyphers channeled through it gain +5 RNG.'
      },
      {
        name: 'Arc Relay [10]',
        description:
          'This model can channel Fury Cyphers. A Fury Cypher channeled through this model is RNG 10.'
      },
      {
        name: 'Fury Reciprocator Spike',
        description:
          'When you channel a Fury Cypher through this model, after the attack is resolved, this model can spike to return the Cypher card to your hand.'
      }
    ]
  } as Weaver,
  {
    unitType: UnitType.Solo,
    id: '4',
    name: 'Hunter',
    faction: 'MW',
    unitDescription: 'Marcher Worlds Solo',
    spd: 7,
    mat: 3,
    rat: 6,
    def: 4,
    arm: 2,
    deploymentCost: 1,
    baseSize: 30,
    damage: 1,
    weapons: [
      {
        name: 'Sniper	Rifle',
        types: [WeaponType.Ballistic],
        rng: 15,
        pow: 4,
        specialRules: [
          {
            name: 'Arc Booster Spike',
            description:
              'When attacking with this weapon, before making a damage roll, this model can spike to cause the target of the attack to suffer –1 ARM until the attack is resolved.'
          }
        ]
      },
      {
        name: 'Combat Blade',
        types: [WeaponType.Kinetic],
        rng: 1,
        pow: 3,
        specialRules: []
      }
    ],
    unitImage: 'assets\\MW\\Squads\\ranger.png',
    specialRules: [
      {
        name: 'Fire & Displace',
        description:
          'Immediately after resolving a ranged attack made by this model, this model can move up to 3.'
      },
      {
        name: 'Mimetic Cloak Charge',
        description:
          'While this model is charged, it gains Stealth. A model with Stealth cannot be targeted by attacks made by models more than 8˝ away.'
      }
    ]
  }
];
