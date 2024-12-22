import { mainClassType } from './types/mainClassType'

export const paladinClass: mainClassType = {
  name: 'paladin',
  accentText: 'A Holy Knight bound to an Oath',
  description:
    "paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.",
  image: {
    m: '/images/classes/paladin-m.png',
    f: '/images/classes/paladin-f.png',
  },
  primaryAbility: 'strength',
  classFeatures: {
    hitPoints: {
      hitDice: 10,
      hitPointsAtLevelOne: {
        info: '10 + your Constitution modifier',
        value: 10,
      },
      hitPoinmtsAtHigherLevels: {
        info: '1d10 (or 6) + your Constitution modifier per paladin level after 1st',
        value: 6,
      },
    },
    proficiencies: {
      armorProficiency: [
        'light armor',
        'medium armor',
        'heavy armor',
        'shields',
      ],
      weaponProficiency: ['simple weapons', 'martial weapons'],
      tools: {
        selections: 0,
        fixed: 'none',
        options: 'none',
      },
      savingThrows: ['charisma', 'wisdom'],
      skills: {
        selections: 2,
        choices: [
          'athletics',
          'insight',
          'intimidation',
          'medicine',
          'persuasion',
          'religion',
        ],
      },
    },
  },
  startingEquipment: [
    'chain mail',
    'a martial weapon and a shield or two martial weapons',
    'five javelins or any simple melee weapon',
    "a priest's pack or an explorer's pack",
    'a holy symbol',
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['divine sense', 'lay on hands'],
    },
    {
      proficiencyBonus: 2,
      features: ['fighting style', 'spellcasting', 'divine smite'],
    },
    {
      proficiencyBonus: 2,
      features: ['divine health', 'sacred oath'],
    },
    {
      proficiencyBonus: 2,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 3,
      features: ['extra attack'],
    },
    {
      proficiencyBonus: 3,
      features: ['aura of protection'],
    },
    {
      proficiencyBonus: 3,
      features: ['sacred oath feature'],
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
      features: ['aura of courage'],
    },
    {
      proficiencyBonus: 4,
      features: ['improved divine smite'],
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
      features: ['cleansing touch'],
    },
    {
      proficiencyBonus: 5,
      features: ['sacred oath feature'],
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
      features: ['aura improvements'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['sacred oath feature'],
    },
  ],
  subclasses: {
    choiceLevel: 3,
    options: [
      'oath of devotion',
      'oath of the ancients',
      'oath of vengeance',
      'oath of conquest',
      'oath of redemption',
      'oath of glory',
      'oath of the watchers',
    ],
  },
}
