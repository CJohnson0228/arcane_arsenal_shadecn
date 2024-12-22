import { mainClassType } from './types/mainClassType'

export const warlockClass: mainClassType = {
  name: 'warlock',
  accentText: 'An Occult Spellcaster empowered by a pact with a powerful being',
  description:
    'Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.',
  image: {
    m: '/images/classes/warlock-m.png',
    f: '/images/classes/warlock-f.png',
  },
  primaryAbility: 'charisma',
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtLevelOne: {
        info: '8 + your Constitution modifier',
        value: 8,
      },
      hitPoinmtsAtHigherLevels: {
        info: '1d8 (or 5) + your Constitution modifier per bard level after 1st',
        value: 5,
      },
    },
    proficiencies: {
      armorProficiency: ['light armor'],
      weaponProficiency: ['simple weapons'],
      tools: {
        selections: 0,
        fixed: 'none',
        options: 'none',
      },
      savingThrows: ['wisdom', 'charisma'],
      skills: {
        selections: 2,
        choices: [
          'arcana',
          'deception',
          'history',
          'intimidation',
          'investigation',
          'nature',
          'religion',
        ],
      },
    },
  },
  startingEquipment: [
    'a light crossbow and 20 bolts or any simple weapon',
    'a com ponent pouch or an arcane focus',
    'a scholar’s pack or a dungeoneer’s pack',
    'leather armor, any simple weapon, and two daggers',
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['pact magic', 'otherworldly patron'],
    },
    {
      proficiencyBonus: 2,
      features: ['eldritch invocations'],
    },
    {
      proficiencyBonus: 2,
      features: ['pact boon'],
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
      features: ['otherworldly patron feature'],
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
      features: ['otherworldly patron feature'],
    },
    {
      proficiencyBonus: 4,
      features: ['mystic arcanum(6th level)'],
    },
    {
      proficiencyBonus: 4,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 5,
      features: ['mystic arcanum(7th level)'],
    },
    {
      proficiencyBonus: 5,
      features: ['otherworldly patron feature'],
    },
    {
      proficiencyBonus: 5,
      features: ['mystic arcanum(8th level)'],
    },
    {
      proficiencyBonus: 5,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['mystic arcanum(9th level)'],
    },
    {
      proficiencyBonus: 6,
      features: [],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['eldritch master'],
    },
  ],
  subclasses: {
    choiceLevel: 1,
    options: [
      'the archfey',
      'the fiend',
      'the great old one',
      'the celestial',
      'the hexblade',
      'the fathomless',
      'the genie',
    ],
  },
}
