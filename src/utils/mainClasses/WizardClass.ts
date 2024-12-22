import { mainClassType } from './types/mainClassType'

export const wizardClass: mainClassType = {
  name: 'wizard',
  accentText:
    'A scholarly magic-user capable of manipulating the structures of reality.',
  description:
    'Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.',
  image: {
    m: '/images/classes/wizard-m.png',
    f: '/images/classes/wizard-f.png',
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
      savingThrows: ['intelligence', 'wisdom'],
      skills: {
        selections: 2,
        choices: [
          'arcana',
          'history',
          'insight',
          'investigation',
          'medicine',
          'religion',
        ],
      },
    },
  },
  startingEquipment: [
    'a quarterstaff or a dagger',
    'a com ponent pouch or an arcane focus',
    "a scholar's pack or an explorer's pack",
    'A spellbook',
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['spellcasting', 'arcane recovery'],
    },
    {
      proficiencyBonus: 2,
      features: ['arcane tradition'],
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
      features: [],
    },
    {
      proficiencyBonus: 3,
      features: ['arcane tradition feature'],
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
      features: ['arcane tradition feature'],
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
      features: ['arcane tradition feature'],
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
      features: [],
    },
    {
      proficiencyBonus: 6,
      features: ['spell mastery'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['signature spell'],
    },
  ],
  subclasses: {
    choiceLevel: 2,
    options: [
      'abjuration',
      'conjuration',
      'divination',
      'enchantment',
      'evocation',
      'illusion',
      'necromancy',
      'transmutation',
      'war magic',
      'bladesinging',
      'order of scribes',
    ],
  },
}
