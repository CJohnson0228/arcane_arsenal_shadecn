import { mainClassType } from '@/data/types/mainClassType'
import { lightArmor, mediumArmor, shields } from '../equipment/armor/armor'
import { allWeapons } from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'

const barbarian: mainClassType = {
  name: 'barbarian',
  accentText: 'A fierce warrior possessed of unquenchable rage',
  description:
    'barbarians are fierce warriors defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea. This rage is powered by primal forces in the multiverse.',
  primaryAbility: 'strength',
  subclasses: {
    choiceLevel: 3,
    options: [
      'path of the berserker',
      'path of the totem warrior',
      'path of the ancestral guardian',
      'path of the storm herald',
      'path of the zealot',
    ],
  },
  image: {
    m: '/images/classes/barbarian-m.png',
    f: '/images/classes/barbarian-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 12,
      hitPointsAtHigherLevels: {
        info: '1d12 (or 7) + your constitution multipler per barbarian level',
        value: 7,
      },
      hitPointsAtLevelOne: {
        info: '12 + your constitution modifier',
        value: 12,
      },
    },
    proficiencies: {
      armorProficiency: [...lightArmor, ...mediumArmor, ...shields],
      weaponProficiency: allWeapons,
      savingThrows: ['strength', 'constitution'],
      skills: {
        choices: [
          SkillProficiencies[1],
          SkillProficiencies[3],
          SkillProficiencies[7],
          SkillProficiencies[10],
          SkillProficiencies[11],
          SkillProficiencies[17],
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
      features: ['rage', 'unarmored defense'],
      proficiencyBonus: 2,
    },
    {
      features: ['reckless attack', 'danger sense'],
      proficiencyBonus: 2,
    },
    {
      features: ['primal path'],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: ['extra attack', 'fast movement'],
      proficiencyBonus: 3,
    },
    {
      features: ['path feature'],
      proficiencyBonus: 3,
    },
    {
      features: ['feral instinct'],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 3,
    },
    {
      features: ['brutal critical (1 die)'],
      proficiencyBonus: 4,
    },
    {
      features: ['path feature'],
      proficiencyBonus: 4,
    },
    {
      features: ['relentless rage'],
      proficiencyBonus: 4,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 4,
    },
    {
      features: ['brutal critical (2 dice)'],
      proficiencyBonus: 5,
    },
    {
      features: ['path feature'],
      proficiencyBonus: 5,
    },
    {
      features: ['persistent rage'],
      proficiencyBonus: 5,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 5,
    },
    {
      features: ['brutal critical (3 dice)'],
      proficiencyBonus: 6,
    },
    {
      features: ['indominable might'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['primal champion'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'greataxe or any martial weapon',
    '2 handaxes or any simple weapon',
    "exporer's pack",
    '4 javelins',
  ],
}

export default barbarian
