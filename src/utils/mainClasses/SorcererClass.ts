import { mainClassType } from './types/mainClassType'

export const sorcererClass: mainClassType = {
  name: 'sorcerer',
  accentText: 'A spellcaster that weilds Innate Magic',
  description:
    "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can't study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.",
  image: {
    m: '/images/classes/sorcerer-m.png',
    f: '/images/classes/sorcerer-f.png',
  },
  primaryAbility: 'charisma',
  classFeatures: {
    hitPoints: {
      hitDice: 6,
      hitPointsAtLevelOne: {
        info: '6 + your Constitution modifier',
        value: 6,
      },
      hitPoinmtsAtHigherLevels: {
        info: '1d6 (or 4) + your Constitution modifier per sorcerer level after 1st',
        value: 4,
      },
    },
    proficiencies: {
      armorProficiency: 'none',
      weaponProficiency: [
        'dagger',
        'dart',
        'sling',
        'quarterstaff',
        'light crossbow',
      ],
      tools: {
        selections: 0,
        fixed: 'none',
        options: 'none',
      },
      savingThrows: ['constitution', 'charisma'],
      skills: {
        selections: 2,
        choices: [
          'arcana',
          'deception',
          'insight',
          'intimidation',
          'persuasion',
          'religion',
        ],
      },
    },
  },
  startingEquipment: [
    'a light crossbow and 20 bolts or any simple weapon',
    'a com ponent pouch or an arcane focus',
    "a dungeoneer's pack or an explorer's pack",
    'Two daggers',
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['spellcasting', 'sorcerous origin'],
    },
    {
      proficiencyBonus: 2,
      features: ['font of magic'],
    },
    {
      proficiencyBonus: 2,
      features: ['metamagic'],
    },
    {
      proficiencyBonus: 2,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 3,
      features: [],
    },
    {
      proficiencyBonus: 3,
      features: ['sorcerous origin feature'],
    },
    {
      proficiencyBonus: 3,
      features: [],
    },
    {
      proficiencyBonus: 3,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 4,
      features: [],
    },
    {
      proficiencyBonus: 4,
      features: ['metamagic'],
    },
    {
      proficiencyBonus: 4,
      features: [],
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
      features: ['sorcerous origin feature'],
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
      features: ['metamagic'],
    },
    {
      proficiencyBonus: 6,
      features: ['sorcerous origin feature'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['sorcerous restoration'],
    },
  ],
  subclasses: {
    choiceLevel: 1,
    options: [
      'draconic bloodline',
      'wild magic',
      'storm sorcery',
      'divine soul',
      'shadow magic',
      'clockwork soul',
      'aberrant mind',
    ],
  },
}
