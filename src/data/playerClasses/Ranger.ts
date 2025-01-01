import { lightArmor, mediumArmor, shields } from '../equipment/armor/armor'
import { martialWeapons, simpleWeapons } from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { mainClassType } from '../types/mainClassType'

const ranger: mainClassType = {
  name: 'ranger',
  accentText: 'A wandering hunter nad protector',
  description:
    'Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes',
  primaryAbility: 'dexterity',
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
  image: {
    m: '/images/classes/ranger-m.png',
    f: '/images/classes/ranger-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 10,
      hitPointsAtHigherLevels: {
        info: '1d10 (or 6) + your Constitution modifier per paladin level',
        value: 6,
      },
      hitPointsAtLevelOne: {
        info: '10 + your Consitution modifier',
        value: 10,
      },
    },
    proficiencies: {
      armorProficiency: [...lightArmor, ...mediumArmor, ...shields],
      weaponProficiency: [...simpleWeapons, ...martialWeapons],
      savingThrows: ['strength', 'dexterity'],
      skills: {
        choices: [
          SkillProficiencies[1],
          SkillProficiencies[3],
          SkillProficiencies[6],
          SkillProficiencies[8],
          SkillProficiencies[10],
          SkillProficiencies[11],
          SkillProficiencies[16],
          SkillProficiencies[17],
        ],
        selections: 3,
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
      features: ['favored enemy', 'natural explorer'],
      proficiencyBonus: 2,
    },
    {
      features: ['fighting style', 'spellcasting'],
      proficiencyBonus: 2,
    },
    {
      features: ['primeval awareness', 'ranger arhcetype'],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: ['extra attack'],
      proficiencyBonus: 3,
    },
    {
      features: ['favored enemy improvements', 'natural explorer improvements'],
      proficiencyBonus: 3,
    },
    {
      features: ['ranger archetype feature'],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement', "land' stride"],
      proficiencyBonus: 3,
    },
    {
      features: [],
      proficiencyBonus: 4,
    },
    {
      features: ['natural explorer improvements', 'hide in plain sight'],
      proficiencyBonus: 4,
    },
    {
      features: ['ranger archetype feature'],
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
      features: ['favored enemy improvements', 'vanish'],
      proficiencyBonus: 5,
    },
    {
      features: ['ranger archetype feature'],
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
      features: ['feral senses'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['foe slayer'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'scalemail or leather armor',
    'two shortswords or two simple melee weapons',
    "a dungeoneer's pack or an explorer's pack",
    'a longbow and quiver of 20 arrows',
  ],
}

export default ranger
