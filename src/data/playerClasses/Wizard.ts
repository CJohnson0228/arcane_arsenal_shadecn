import {
  simpleMeleeWeapons,
  simpleRangedWeapons,
} from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { mainClassType } from '../types/mainClassType'

const wizard: mainClassType = {
  name: 'wizard',
  accentText:
    'A scholarly magic-user capable of manipulating the structures of reality.',
  description:
    'Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.',
  primaryAbility: 'intelligence',
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
  image: {
    m: '/images/classes/wizard-m.png',
    f: '/images/classes/wizard-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 6,
      hitPointsAtHigherLevels: {
        info: '1d6 (or 4) + your Constitution modifier per wizard level',
        value: 4,
      },
      hitPointsAtLevelOne: {
        info: '6 + your constitution modifier',
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
      savingThrows: ['intelligence', 'wisdom'],
      skills: {
        choices: [
          SkillProficiencies[2],
          SkillProficiencies[5],
          SkillProficiencies[6],
          SkillProficiencies[8],
          SkillProficiencies[9],
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
      features: ['spellcasting', 'arcane recovery'],
      proficiencyBonus: 2,
    },
    {
      features: ['arcane tradition'],
      proficiencyBonus: 2,
    },
    {
      features: [],
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
      features: ['arcane tradition feature'],
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
      features: ['arcane tradition feature'],
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
      features: ['arcane tradition feature'],
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
      features: [],
      proficiencyBonus: 6,
    },
    {
      features: ['spell mastery'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['signature spell'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'a quarterstaff or a dagger',
    'a component pouch or arcane focus',
    "a scholar's pack or an explorer's pack",
    'a spellbook',
  ],
}

export default wizard
