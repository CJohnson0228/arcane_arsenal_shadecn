import { mainClassType } from './types/mainClassType'

export const barbarianClass: mainClassType = {
  name: 'barbarian',
  accentText: 'A fierce Warrior possessed of unquenchable rage',
  description:
    'barbarians are fierce warriors defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea. This rage is powered by primal forces in the multiverse.',
  image: {
    m: '/images/classes/barbarian-m.png',
    f: '/images/classes/barbarian-f.png',
  },
  primaryAbility: 'strength',
  classFeatures: {
    hitPoints: {
      hitDice: 12,
      hitPointsAtLevelOne: {
        info: '12 + your Constitution modifier',
        value: 12,
      },
      hitPoinmtsAtHigherLevels: {
        info: '1d12 (or 7) + your Constitution modifier per barbarian level after 1st',
        value: 7,
      },
    },
    proficiencies: {
      armorProficiency: ['light armor', 'medium armor', 'shields'],
      weaponProficiency: ['simple weapons', 'martial weapons'],
      tools: {
        selections: 0,
        fixed: 'none',
        options: 'none',
      },
      savingThrows: ['strength', 'constitution'],
      skills: {
        selections: 2,
        choices: [
          'animal handling',
          'athletics',
          'intimidation',
          'nature',
          'perception',
          'survival',
        ],
      },
    },
  },
  startingEquipment: [
    'greataxe or any martial weapon',
    '2 handaxes or any simple weapon',
    "explorer's pack",
    '4 javelins',
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['rage', 'unarmored defense'],
    },
    {
      proficiencyBonus: 2,
      features: ['reckless attack', 'danger sense'],
    },
    {
      proficiencyBonus: 2,
      features: ['primal path'],
    },
    {
      proficiencyBonus: 2,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 3,
      features: ['Extra Attack', 'Fast Movement'],
    },
    {
      proficiencyBonus: 3,
      features: ['Path Feature'],
    },
    {
      proficiencyBonus: 3,
      features: ['Feral Instinct'],
    },
    {
      proficiencyBonus: 3,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 4,
      features: ['Brutal Critical(1 die)'],
    },
    {
      proficiencyBonus: 4,
      features: ['Path feature'],
    },
    {
      proficiencyBonus: 4,
      features: ['Relentless Rage'],
    },
    {
      proficiencyBonus: 4,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 5,
      features: ['Brutal Critical(2 dice)'],
    },
    {
      proficiencyBonus: 5,
      features: ['Path feature'],
    },
    {
      proficiencyBonus: 5,
      features: ['Persistent Rage'],
    },
    {
      proficiencyBonus: 5,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['Brutal Critical(3 dice)'],
    },
    {
      proficiencyBonus: 6,
      features: ['Indomitable Might'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['Primal Champion'],
    },
  ],
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
}
