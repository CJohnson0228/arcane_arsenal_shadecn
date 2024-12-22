import { mainClassType } from './types/mainClassType'

export const fighterClass: mainClassType = {
  name: 'fighter',
  accentText: 'A Master of Arms and Armor',
  description:
    'Fighters learn the basics of all com bat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with som e degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike.',
  image: {
    m: '/images/classes/fighter-m.png',
    f: '/images/classes/fighter-f.png',
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
        info: '1d10 (or 6) + your Constitution modifier per fighter level after 1st',
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
      savingThrows: ['strength', 'constitution'],
      skills: {
        selections: 2,
        choices: [
          'acrobatics',
          'animal handling',
          'athletics',
          'history',
          'insight',
          'intimidation',
          'perception',
          'survival',
        ],
      },
    },
  },
  startingEquipment: [
    'chain mail or leather armor, longbow and 20 arrows',
    'a martial weapon and a shield, or two martial weapons',
    'a light crossbow and 20 bolts or two handaxes',
    "a dungeoneer's pack or an explorer's pack",
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['fighting style', 'second wind'],
    },
    {
      proficiencyBonus: 2,
      features: ['action surge'],
    },
    {
      proficiencyBonus: 2,
      features: ['martial archetype'],
    },
    {
      proficiencyBonus: 2,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 3,
      features: ['extra attack (1)'],
    },
    {
      proficiencyBonus: 3,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 3,
      features: ['martial archetype feature'],
    },
    {
      proficiencyBonus: 3,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 4,
      features: ['Indomitable (one use)'],
    },
    {
      proficiencyBonus: 4,
      features: ['martial archetype feature'],
    },
    {
      proficiencyBonus: 4,
      features: ['extra attack (2)'],
    },
    {
      proficiencyBonus: 4,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 5,
      features: ['Indomitable (two uses)'],
    },
    {
      proficiencyBonus: 5,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 5,
      features: ['martial archetype feature'],
    },
    {
      proficiencyBonus: 5,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['Indomitable (three uses)', 'action surge (two uses)'],
    },
    {
      proficiencyBonus: 6,
      features: ['marital archetype feature'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['extra attack (3)'],
    },
  ],
  subclasses: {
    choiceLevel: 3,
    options: [
      'champion',
      'battlemaster',
      'eldritch knight',
      'psi warrior',
      'rune knight',
      'samurai',
      'arcane archer',
      'cavalier',
    ],
  },
}
