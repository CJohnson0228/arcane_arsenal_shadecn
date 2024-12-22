import { mainClassType } from './types/mainClassType'

export const rangerClass: mainClassType = {
  name: 'ranger',
  accentText: 'A wandering hunter and protector',
  description:
    'Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes',
  image: {
    m: '/images/classes/ranger-m.png',
    f: '/images/classes/ranger-f.png',
  },
  primaryAbility: 'dexterity',
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
      armorProficiency: ['light armor', 'medium armor', 'shields'],
      weaponProficiency: ['simple weapons', 'martial weapons'],
      tools: {
        selections: 0,
        fixed: 'none',
        options: 'none',
      },
      savingThrows: ['strength', 'dexterity'],
      skills: {
        selections: 3,
        choices: [
          'animal handling',
          'athletics',
          'insight',
          'investigation',
          'nature',
          'perception',
          'stealth',
          'survival',
        ],
      },
    },
  },
  startingEquipment: [
    'scale mail or leather armor',
    'two shortswords or two simple melee weapons',
    "a dungeoneer's pack or an explorer's pack",
    'a longbow and a quiver of 20 arrows',
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['favored enemy', 'natural explorer'],
    },
    {
      proficiencyBonus: 2,
      features: ['fighting style', 'spellcasting'],
    },
    {
      proficiencyBonus: 2,
      features: ['primeval awareness', 'ranger archetype'],
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
      features: ['favored enemy improvements', 'natural explorer improvements'],
    },
    {
      proficiencyBonus: 3,
      features: ['ranger archetype feature'],
    },
    {
      proficiencyBonus: 3,
      features: ['Ability Score Improvement', "land's stride"],
    },
    {
      proficiencyBonus: 4,
      features: [],
    },
    {
      proficiencyBonus: 4,
      features: ['natural explorer improvements', 'hide in plain sight'],
    },
    {
      proficiencyBonus: 4,
      features: ['ranger archetype feature'],
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
      features: ['favored enemy improvements', 'vanish'],
    },
    {
      proficiencyBonus: 5,
      features: ['ranger archetype feature'],
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
      features: ['feral senses'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['foe slayer'],
    },
  ],
  subclasses: {
    choiceLevel: 3,
    options: [
      'beast master',
      'hunter',
      'gloom stalker',
      'horizon walker',
      'monster slayer',
      'swarmkeeper',
      'fey wanderer',
    ],
  },
}
