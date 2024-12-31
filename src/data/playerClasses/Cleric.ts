import { lightArmor, mediumArmor, shields } from '../equipment/armor/armor'
import { simpleWeapons } from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { mainClassType } from '../types/mainClassType'

const cleric: mainClassType = {
  name: 'cleric',
  accentText: 'Priest of Divine Power',
  description:
    'Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.',
  primaryAbility: 'wisdom',
  subclasses: {
    choiceLevel: 1,
    options: [
      'knowledge domain',
      'life domain',
      'light domain',
      'nature domain',
      'tempest domain',
      'trickery domain',
      'war domain',
      'forge domain',
      'grave domain',
      'order domain',
      'peace domain',
      'twilight domain',
    ],
  },
  image: {
    m: '/images/classes/cleric-m.png',
    f: '/images/classes/cleric-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtHigherLevels: {
        info: '1d8 (or 5) + your constitution modifier per cleric level',
        value: 5,
      },
      hitPointsAtLevelOne: {
        info: '8 + your constitution modifer',
        value: 8,
      },
    },
    proficiencies: {
      armorProficiency: [...lightArmor, ...mediumArmor, ...shields],
      weaponProficiency: [...simpleWeapons],
      savingThrows: ['wisdom', 'charisma'],
      skills: {
        choices: [
          SkillProficiencies[5],
          SkillProficiencies[6],
          SkillProficiencies[9],
          SkillProficiencies[13],
          SkillProficiencies[14],
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
      features: ['spellcasting', 'divine domain'],
      proficiencyBonus: 2,
    },
    {
      features: ['channel divinity(1/rest)', 'divine domain feature'],
      proficiencyBonus: 2,
    },
    {
      features: [],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: ['destroy undead (1/2cr)'],
      proficiencyBonus: 3,
    },
    {
      features: ['channel divinity (2/rest)', 'divine domain feature'],
      proficiencyBonus: 3,
    },
    {
      features: [],
      proficiencyBonus: 3,
    },
    {
      features: [
        'ability score improvement',
        'destroy undead (1cr)',
        'divine domain feature',
      ],
      proficiencyBonus: 3,
    },
    {
      features: [],
      proficiencyBonus: 4,
    },
    {
      features: ['divine intervention'],
      proficiencyBonus: 4,
    },
    {
      features: ['destroy undead (2cr)'],
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
      features: ['destroy undead (3cr)'],
      proficiencyBonus: 5,
    },
    {
      features: [],
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
      features: ['destroy undead (4cr)', 'divine domain feature'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['divine intervention improvement'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'mace or warhammer(if proficient)',
    'scale mail, leather, or chainmail armor (if proficient)',
    'light crossbow and 20 bolts or any simple weapon',
    "priest's pack or explorer's pack",
    'a shield and holy symbol',
  ],
}

export default cleric
