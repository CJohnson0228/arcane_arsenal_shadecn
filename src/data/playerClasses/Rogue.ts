import { lightArmor } from '../equipment/armor/armor'
import { tools } from '../equipment/generalEquipment'
import {
  martialMeleeWeapons,
  martialRangedWeapons,
  simpleWeapons,
} from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { mainClassType } from '../types/mainClassType'

const rogue: mainClassType = {
  name: 'rogue',
  accentText: 'An expert in stealth and deception',
  description:
    'Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarm ing traps, and opening locks.',
  primaryAbility: 'dexterity',
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
  image: {
    m: '/images/classes/rogue-m.png',
    f: '/images/classes/rogue-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtHigherLevels: {
        info: '1d8 (or 5) + your Constitution modifier per rogue level',
        value: 5,
      },
      hitPointsAtLevelOne: {
        info: '8 + your Constitution modifier',
        value: 8,
      },
    },
    proficiencies: {
      armorProficiency: [...lightArmor],
      weaponProficiency: [
        ...simpleWeapons,
        martialRangedWeapons[1],
        martialMeleeWeapons[7],
        martialMeleeWeapons[11],
        martialMeleeWeapons[13],
      ],
      savingThrows: ['dexterity', 'intelligence'],
      skills: {
        choices: [
          SkillProficiencies[0],
          SkillProficiencies[3],
          SkillProficiencies[4],
          SkillProficiencies[6],
          SkillProficiencies[7],
          SkillProficiencies[8],
          SkillProficiencies[11],
          SkillProficiencies[12],
          SkillProficiencies[13],
          SkillProficiencies[14],
          SkillProficiencies[15],
        ],
        selections: 4,
      },
      tools: {
        fixed: [tools.thievesTools],
        options: 'none',
        selections: 0,
      },
    },
  },
  classProgression: [
    {
      features: ['expertise', 'sneak attack', "theives' cant"],
      proficiencyBonus: 2,
    },
    {
      features: ['cunning action'],
      proficiencyBonus: 2,
    },
    {
      features: ['roguish archetype'],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: ['uncanny dodge'],
      proficiencyBonus: 3,
    },
    {
      features: ['expertise'],
      proficiencyBonus: 3,
    },
    {
      features: ['evasion'],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 3,
    },
    {
      features: ['roguish archetype feature'],
      proficiencyBonus: 4,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 4,
    },
    {
      features: ['reliable talent'],
      proficiencyBonus: 4,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 4,
    },
    {
      features: ['roguish archetype feature'],
      proficiencyBonus: 5,
    },
    {
      features: ['blindsense'],
      proficiencyBonus: 5,
    },
    {
      features: ['slippery mind'],
      proficiencyBonus: 5,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 5,
    },
    {
      features: ['roguish archetype feature'],
      proficiencyBonus: 6,
    },
    {
      features: ['elusive'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['stroke of luck'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'a rapier or shortsword',
    'a shortbow and quiver of 20 arrows or a shortsword',
    "a burglar's pack, a dungeoneer's pack, or an explorer's pack",
    "leather armor, two daggers, and thieves' tools",
  ],
}

export default rogue
