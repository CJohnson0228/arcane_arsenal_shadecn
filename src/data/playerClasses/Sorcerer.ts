import {
  simpleMeleeWeapons,
  simpleRangedWeapons,
} from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { mainClassType } from '../types/mainClassType'

const sorcerer: mainClassType = {
  name: 'sorcerer',
  accentText: 'A spellcaster that weilds innate talent',
  description:
    "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can't study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.",
  primaryAbility: 'charisma',
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
  image: {
    m: '/images/classes/sorcerer-m.png',
    f: '/images/classes/sorcerer-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 6,
      hitPointsAtHigherLevels: {
        info: '1d6 (or 4) + your Constitution modifier per sorcerer level',
        value: 4,
      },
      hitPointsAtLevelOne: {
        info: '6 + your COnstitution modifier',
        value: 6,
      },
    },
    proficiencies: {
      armorProficiency: 'none',
      weaponProficiency: [
        simpleMeleeWeapons[1],
        simpleMeleeWeapons[7],
        simpleRangedWeapons[0],
        simpleRangedWeapons[1],
      ],
      savingThrows: ['constitution', 'charisma'],
      skills: {
        choices: [
          SkillProficiencies[2],
          SkillProficiencies[4],
          SkillProficiencies[6],
          SkillProficiencies[7],
          SkillProficiencies[13],
          SkillProficiencies[14],
        ],
        selections: 2,
      },
      tools: {
        fixed: 'none',
        options: 'none',
        selections: 0,
      },
    },
  },
  classProgression: [
    {
      features: ['spellcasting', 'sorcerous origin'],
      proficiencyBonus: 2,
    },
    {
      features: ['font of magic'],
      proficiencyBonus: 2,
    },
    {
      features: ['metamagic'],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: [],
      proficiencyBonus: 3,
    },
    {
      features: ['sorcerous origin feature'],
      proficiencyBonus: 3,
    },
    {
      features: [],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 3,
    },
    {
      features: [],
      proficiencyBonus: 4,
    },
    {
      features: ['metamagic'],
      proficiencyBonus: 4,
    },
    {
      features: [],
      proficiencyBonus: 4,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 4,
    },
    {
      features: [],
      proficiencyBonus: 5,
    },
    {
      features: ['sorcerous origin feature'],
      proficiencyBonus: 5,
    },
    {
      features: [],
      proficiencyBonus: 5,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 5,
    },
    {
      features: ['metamagic'],
      proficiencyBonus: 6,
    },
    {
      features: ['sorcerous origin feature'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['sorcerous restoration'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'a light crossbow and 20 bolts or any simple weapon',
    'a component pouch or arcane focus',
    "a dungeoneer's pack or an explorer's pack",
    'two daggers',
  ],
}

export default sorcerer
