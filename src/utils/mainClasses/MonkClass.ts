import { artisanTools, musicalInstruments } from '../equipment/generalEquipment'
import { mainClassType } from './types/mainClassType'

export const monkClass: mainClassType = {
  name: 'monk',
  accentText: 'A martial Artist of exceptional skill and discipline',
  description:
    'Monks harness the Ki within themselves to create magical effects and exceed their bodies physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes',
  image: {
    m: '/images/classes/monk-m.png',
    f: '/images/classes/monk-f.png',
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
        info: '1d8 (or 5) + your Constitution modifier per monk level after 1st',
        value: 5,
      },
    },
    proficiencies: {
      armorProficiency: 'none',
      weaponProficiency: ['simple weapons', 'shortsword'],
      tools: {
        selections: 1,
        fixed: 'none',
        options: [...artisanTools, ...musicalInstruments],
      },
      savingThrows: ['strength', 'dexterity'],
      skills: {
        selections: 2,
        choices: [
          'acrobatics',
          'athletics',
          'history',
          'insight',
          'religion',
          'stealth',
        ],
      },
    },
  },
  startingEquipment: [
    'shortsword or any simple weapon',
    "dungeoneer's pack or explorer's pack",
    '10 darts',
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['unarmored defense', 'martial arts'],
    },
    {
      proficiencyBonus: 2,
      features: ['ki', 'unarmored movement'],
    },
    {
      proficiencyBonus: 2,
      features: ['monastic tradition', 'deflect missiles'],
    },
    {
      proficiencyBonus: 2,
      features: ['Ability Score Improvement', 'slow fall'],
    },
    {
      proficiencyBonus: 3,
      features: ['extra attack', 'stunning strike'],
    },
    {
      proficiencyBonus: 3,
      features: ['ki-empowered strikes', 'monastic tradition feature'],
    },
    {
      proficiencyBonus: 3,
      features: ['evasion', 'stillness of mind'],
    },
    {
      proficiencyBonus: 3,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 4,
      features: ['unarmored movement improvement'],
    },
    {
      proficiencyBonus: 4,
      features: ['purity of body'],
    },
    {
      proficiencyBonus: 4,
      features: ['monastic tradition feature'],
    },
    {
      proficiencyBonus: 4,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 5,
      features: ['tongue of the sun and moon'],
    },
    {
      proficiencyBonus: 5,
      features: ['diamond soul'],
    },
    {
      proficiencyBonus: 5,
      features: ['timeless body'],
    },
    {
      proficiencyBonus: 5,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['monastic tradition feature'],
    },
    {
      proficiencyBonus: 6,
      features: ['empty body'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['perfect self'],
    },
  ],
  subclasses: {
    choiceLevel: 3,
    options: [
      'way of the open hand',
      'way of the shadow',
      'way of the four elements',
      'way of the drunken master',
      'way of the kensei',
      'way of the sun soul',
      'way of mercy',
      'way of the astral self',
    ],
  },
}
