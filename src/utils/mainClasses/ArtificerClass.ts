import { artisanTools, tools } from '../equipment/generalEquipment'
import { mainClassType } from './types/mainClassType'

export const artificerClass: mainClassType = {
  name: 'artificer',
  accentText: 'A Master of Invention',
  description:
    'artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions',
  image: {
    m: '/images/classes/artificer-m.png',
    f: '/images/classes/artificer-f.png',
  },
  primaryAbility: 'intelligence',
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtLevelOne: {
        info: '8 + your Constitution modifier',
        value: 8,
      },
      hitPoinmtsAtHigherLevels: {
        info: '1d8 (or 5) + your Constitution modifier per artificer level after 1st',
        value: 5,
      },
    },
    proficiencies: {
      armorProficiency: ['light armor', 'medium armor', 'shields'],
      weaponProficiency: ['simple weapons'],
      tools: {
        selections: 1,
        fixed: [tools.thievesTools, tools.artisanTools[14]],
        options: artisanTools,
      },
      savingThrows: ['constitution', 'intelligence'],
      skills: {
        selections: 2,
        choices: [
          'arcana',
          'history',
          'investigation',
          'medicine',
          'nature',
          'perception',
          'sleight of hand',
        ],
      },
    },
  },
  startingEquipment: [
    'any two simple weapons',
    'a light crossbow and 20 bolts',
    'studded leather armor or scale mail',
    "thieves' tools and dungeoneer's pack",
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['magical tinkering', 'spellcasting'],
    },
    {
      proficiencyBonus: 2,
      features: ['infuse item'],
    },
    {
      proficiencyBonus: 2,
      features: ['artificer specialist', 'the right tool for the job'],
    },
    {
      proficiencyBonus: 2,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 3,
      features: ['artificer specialist feature'],
    },
    {
      proficiencyBonus: 3,
      features: ['toool expertise'],
    },
    {
      proficiencyBonus: 3,
      features: ['flash of genius'],
    },
    {
      proficiencyBonus: 3,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 4,
      features: ['artificer specialist feature'],
    },
    {
      proficiencyBonus: 4,
      features: ['magic item adept'],
    },
    {
      proficiencyBonus: 4,
      features: ['spell-storing item'],
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
      features: ['magic item savant'],
    },
    {
      proficiencyBonus: 5,
      features: ['artificer specialist feature'],
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
      features: ['magic item master'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['Soul of Artifice'],
    },
  ],
  subclasses: {
    choiceLevel: 3,
    options: ['alchemist', 'artillerist', 'battle smith'],
  },
}
