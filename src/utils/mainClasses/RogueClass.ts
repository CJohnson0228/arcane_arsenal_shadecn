import { tools } from '../equipment/generalEquipment'
import { mainClassType } from './types/mainClassType'

export const rogueClass: mainClassType = {
  name: 'rogue',
  accentText: 'An expert in stealth and deception',
  description:
    'Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarm ing traps, and opening locks.',
  image: {
    m: '/images/classes/rogue-m.png',
    f: '/images/classes/rogue-f.png',
  },
  primaryAbility: 'dexterity',
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtLevelOne: {
        info: '8 + your Constitution modifier',
        value: 8,
      },
      hitPoinmtsAtHigherLevels: {
        info: '1d8 (or 5) + your Constitution modifier per bard level after 1st',
        value: 5,
      },
    },
    proficiencies: {
      armorProficiency: ['light armor'],
      weaponProficiency: [
        'simple weapons',
        'hand crossbow',
        'longsword',
        'rapier',
        'shortsword',
      ],
      tools: {
        selections: 0,
        fixed: tools.thievesTools,
        options: 'none',
      },
      savingThrows: ['dexterity', 'intelligence'],
      skills: {
        selections: 4,
        choices: [
          'acrobatics',
          'athletics',
          'deception',
          'insight',
          'intimidation',
          'investigation',
          'perception',
          'performance',
          'persuasion',
          'sleight of hand',
          'stealth',
        ],
      },
    },
  },
  startingEquipment: [
    'a rapier or a shortsword',
    'a shortbow and quiver of 20 arrows or  a shortsword',
    "a burglar’s pack, a dungeoneer's pack, or an explorer's pack",
    "leather armor, two daggers, and thieves' tools",
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['expertise', 'sneak attack', "thieves' cant"],
    },
    {
      proficiencyBonus: 2,
      features: ['cunning action'],
    },
    {
      proficiencyBonus: 2,
      features: ['roguish archetype'],
    },
    {
      proficiencyBonus: 2,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 3,
      features: ['uncanny dodge'],
    },
    {
      proficiencyBonus: 3,
      features: ['expertise'],
    },
    {
      proficiencyBonus: 3,
      features: ['evasion'],
    },
    {
      proficiencyBonus: 3,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 4,
      features: ['roguish archetype feature'],
    },
    {
      proficiencyBonus: 4,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 4,
      features: ['reliable talent'],
    },
    {
      proficiencyBonus: 4,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 5,
      features: ['roguish archetype feature'],
    },
    {
      proficiencyBonus: 5,
      features: ['blindsense'],
    },
    {
      proficiencyBonus: 5,
      features: ['slippery mind'],
    },
    {
      proficiencyBonus: 5,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['roguish archetype feature'],
    },
    {
      proficiencyBonus: 6,
      features: ['elusive'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['stroke of luck'],
    },
  ],
  subclasses: {
    choiceLevel: 3,
    options: [
      'arcane trickster',
      'thief',
      'assassin',
      'inquisitive',
      'mastermind',
      'scout',
      'swashbuckler',
      'phantom',
      'soulknife',
    ],
  },
}
