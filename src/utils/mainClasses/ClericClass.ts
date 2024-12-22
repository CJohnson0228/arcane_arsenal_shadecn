import { mainClassType } from './types/mainClassType'

export const clericClass: mainClassType = {
  name: 'cleric',
  accentText: 'Priest of Divine Power',
  description:
    'Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.',
  image: {
    m: '/images/classes/cleric-m.png',
    f: '/images/classes/cleric-f.png',
  },
  primaryAbility: 'wisdom',
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtLevelOne: {
        info: '8 + your Constitution modifier',
        value: 8,
      },
      hitPoinmtsAtHigherLevels: {
        info: '1d8 (or 5) + your Constitution modifier per cleric level',
        value: 5,
      },
    },
    proficiencies: {
      armorProficiency: ['light armor', 'medium armor', 'shields'],
      weaponProficiency: ['simple weapons'],
      tools: {
        selections: 0,
        fixed: 'none',
        options: 'none',
      },
      savingThrows: ['wisdom', 'charisma'],
      skills: {
        selections: 2,
        choices: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
      },
    },
  },
  startingEquipment: [
    'mace or warhammer(if proficient)',
    'scale mail, leather armor, or chain mail(if proficient)',
    'light crossbow and 20 bolts or any simple weapon',
    "priest's pack or explorer's pack",
    'a shield and holy symbol',
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['spellcasting', 'divine domain'],
    },
    {
      proficiencyBonus: 2,
      features: ['channel divinity(1/rest)', 'divine domain feature'],
    },
    {
      proficiencyBonus: 2,
      features: [],
    },
    {
      proficiencyBonus: 2,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 3,
      features: ['destroy undead(1/2 CR)'],
    },
    {
      proficiencyBonus: 3,
      features: ['channel divinity(2/rest)', 'divine domain feature'],
    },
    {
      proficiencyBonus: 3,
      features: [],
    },
    {
      proficiencyBonus: 3,
      features: [
        'Ability Score Improvement',
        'destroy undead(1 CR)',
        'divine domain feature',
      ],
    },
    {
      proficiencyBonus: 4,
      features: [],
    },
    {
      proficiencyBonus: 4,
      features: ['divine intervention'],
    },
    {
      proficiencyBonus: 4,
      features: ['destroy undead(2 CR)'],
    },
    {
      proficiencyBonus: 4,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 5,
      features: [],
    },
    {
      proficiencyBonus: 5,
      features: ['destroy undead(3 CR)'],
    },
    {
      proficiencyBonus: 5,
      features: [],
    },
    {
      proficiencyBonus: 5,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['destroy undead(4 CR)', 'divine domain feature'],
    },
    {
      proficiencyBonus: 6,
      features: ['channel divinity(3/rest)'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['divine intervention improvement'],
    },
  ],
  subclasses: {
    choiceLevel: 1,
    options: [
      'knowledge domain',
      'life domain',
      'light domain',
      'nature domain',
      'tempest domain',
      'trickery domain',
      'war domain',
      'forge domain',
      'grave domain',
      'order domain',
      'peace domain',
      'twilight domain',
    ],
  },
}
