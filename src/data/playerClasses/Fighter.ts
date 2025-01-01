import { allBasicArmor } from '../equipment/armor/armor'
import { allWeapons } from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { mainClassType } from '../types/mainClassType'

const fighter: mainClassType = {
  name: 'fighter',
  accentText: 'A Master of Arms and Armor',
  description:
    'Fighters learn the basics of all com bat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with som e degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike.',
  primaryAbility: 'strength',
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
  image: {
    m: '/images/classes/fighter-m.png',
    f: '/images/classes/fighter-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 10,
      hitPointsAtHigherLevels: {
        info: '1d10 (or 6) + your Constitution modifier per fighter level',
        value: 6,
      },
      hitPointsAtLevelOne: {
        info: '10 + your Constitution modifier',
        value: 10,
      },
    },
    proficiencies: {
      armorProficiency: [...allBasicArmor],
      weaponProficiency: [...allWeapons],
      savingThrows: ['strength', 'constitution'],
      skills: {
        choices: [
          SkillProficiencies[0],
          SkillProficiencies[1],
          SkillProficiencies[3],
          SkillProficiencies[5],
          SkillProficiencies[6],
          SkillProficiencies[7],
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
      features: ['fighting style', 'second wind'],
      proficiencyBonus: 2,
    },
    {
      features: ['action surge'],
      proficiencyBonus: 2,
    },
    {
      features: ['martial archetype'],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: ['extra attack (1)'],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 3,
    },
    {
      features: ['martial archetype feature'],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 3,
    },
    {
      features: ['indominable'],
      proficiencyBonus: 4,
    },
    {
      features: ['martial archetype feature'],
      proficiencyBonus: 4,
    },
    {
      features: ['extra attack (2)'],
      proficiencyBonus: 4,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 4,
    },
    {
      features: ['indominable (2)'],
      proficiencyBonus: 5,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 5,
    },
    {
      features: ['martial archetype feature'],
      proficiencyBonus: 5,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 5,
    },
    {
      features: ['indominable (3)', 'action surge(2)'],
      proficiencyBonus: 6,
    },
    {
      features: ['martial archetype feature'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['extra attack (3)'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'chainmail or leather armor, longbow and 20 arrows',
    'a martial weapon and shield, or two martial weapons',
    'a light crossbow and 20 bolts or two handaxes',
    "a dungeoneer's pack or an explorer's pack",
  ],
}

export default fighter
