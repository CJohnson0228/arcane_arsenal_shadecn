import { mainClassType } from '@/data/types/mainClassType'
import { lightArmor, mediumArmor, shields } from '../equipment/armor/armor'
import { tools } from '../equipment/generalEquipment'
import { simpleWeapons } from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'

const artificer: mainClassType = {
  name: 'artificer',
  accentText: 'A Master of Invention',
  description:
    'artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions',
  primaryAbility: 'intelligence',
  subclasses: {
    choiceLevel: 3,
    options: ['alchemist', 'artillerist', 'battlesmith'],
  },
  image: {
    m: '/images/classes/artificer-m.png',
    f: '/images/classes/artificer-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtHigherLevels: {
        info: '1d8 (or 5) + your constitution multiplier per artificer level after 1st',
        value: 5,
      },
      hitPointsAtLevelOne: {
        info: '8 + your constitution modifier',
        value: 8,
      },
    },
    proficiencies: {
      armorProficiency: [...lightArmor, ...mediumArmor, ...shields],
      weaponProficiency: simpleWeapons,
      savingThrows: ['constitution', 'intelligence'],
      skills: {
        choices: [
          SkillProficiencies[2],
          SkillProficiencies[5],
          SkillProficiencies[8],
          SkillProficiencies[9],
          SkillProficiencies[10],
          SkillProficiencies[11],
          SkillProficiencies[15],
        ],
        selections: 2,
      },
      tools: {
        fixed: [tools.artisanTools[14], tools.thievesTools],
        options: [...tools.artisanTools],
        selections: 1,
      },
    },
  },
  classProgression: [
    {
      features: ['magical tinkering', 'spellcasting'],
      proficiencyBonus: 2,
    },
    {
      features: ['infuse item'],
      proficiencyBonus: 2,
    },
    {
      features: ['artificer specialist', 'the right tool for the job'],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: ['artificer specialist feature'],
      proficiencyBonus: 3,
    },
    {
      features: ['tool expertise'],
      proficiencyBonus: 3,
    },
    {
      features: ['flash of genius'],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 3,
    },
    {
      features: ['artificer specialist feature'],
      proficiencyBonus: 4,
    },
    {
      features: ['magic item adept'],
      proficiencyBonus: 4,
    },
    {
      features: ['spell storing item'],
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
      features: ['magic item sevant'],
      proficiencyBonus: 5,
    },
    {
      features: ['artificer specialist feature'],
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
      features: ['magic item master'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['Soul of Artifice'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'any two simple weapons',
    'a light crossbow and 20 bolts',
    'studded leather armor or scalemail',
    "thieves' tools and dungeoneer's pack",
  ],
}

export default artificer
