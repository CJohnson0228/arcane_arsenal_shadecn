import { artisanTools, musicalInstruments } from '../equipment/generalEquipment'
import {
  martialMeleeWeapons,
  simpleWeapons,
} from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { mainClassType } from '../types/mainClassType'

const monk: mainClassType = {
  name: 'monk',
  accentText: 'A martial artist of exceptional skill and discipline',
  description:
    'Monks harness the Ki within themselves to create magical effects and exceed their bodies physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes',
  primaryAbility: 'wisdom',
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
  image: {
    m: '/images/classes/monk-m.png',
    f: '/images/classes/monk-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtHigherLevels: {
        info: '1d8 (or 5) + your Constitution modifier per monk level',
        value: 5,
      },
      hitPointsAtLevelOne: {
        info: '8 + your Constitution modifier',
        value: 8,
      },
    },
    proficiencies: {
      armorProficiency: 'none',
      weaponProficiency: [...simpleWeapons, martialMeleeWeapons[13]],
      savingThrows: ['strength', 'dexterity'],
      skills: {
        choices: [
          SkillProficiencies[0],
          SkillProficiencies[3],
          SkillProficiencies[5],
          SkillProficiencies[6],
          SkillProficiencies[14],
          SkillProficiencies[16],
        ],
        selections: 2,
      },
      tools: {
        fixed: 'none',
        options: [...artisanTools, ...musicalInstruments],
        selections: 1,
      },
    },
  },
  classProgression: [
    {
      features: ['unarmored defense', 'martial arts'],
      proficiencyBonus: 2,
    },
    {
      features: ['ki', 'unarmored movement'],
      proficiencyBonus: 2,
    },
    {
      features: ['monastic tradition', 'deflect missiles'],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement', 'slow fall'],
      proficiencyBonus: 2,
    },
    {
      features: ['extra attack', 'stunning strike'],
      proficiencyBonus: 3,
    },
    {
      features: ['ki empowered strikes', 'monastic tradition feature'],
      proficiencyBonus: 3,
    },
    {
      features: ['evasion', 'stillness of mind'],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 3,
    },
    {
      features: ['unarmored movement improvement'],
      proficiencyBonus: 4,
    },
    {
      features: ['purity of body'],
      proficiencyBonus: 4,
    },
    {
      features: ['monastic tradition feature'],
      proficiencyBonus: 4,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 4,
    },
    {
      features: ['tongue of the sun and moon'],
      proficiencyBonus: 5,
    },
    {
      features: ['diamond soul'],
      proficiencyBonus: 5,
    },
    {
      features: ['timeless body'],
      proficiencyBonus: 5,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 5,
    },
    {
      features: ['monastic tradition feature'],
      proficiencyBonus: 6,
    },
    {
      features: ['empty body'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['perfect self'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'shortsword or any simple weapon',
    "dungeoneer's pack or explorer's pack",
    '10 darts',
  ],
}

export default monk
