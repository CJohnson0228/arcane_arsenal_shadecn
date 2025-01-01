import { lightArmor } from '../equipment/armor/armor'
import { simpleWeapons } from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { mainClassType } from '../types/mainClassType'

const warlock: mainClassType = {
  name: 'warlock',
  accentText: 'An Occult Spellcaster empowered by a pact with a powerful being',
  description:
    'Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.',
  primaryAbility: 'charisma',
  subclasses: {
    choiceLevel: 1,
    options: [
      'the archfey',
      'the fiend',
      'the great old one',
      'the celestial',
      'the hexblade',
      'the fathomless',
      'the genie',
    ],
  },
  image: {
    m: '/images/classes/warlock-m.png',
    f: '/images/classes/warlock-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtHigherLevels: {
        info: '1d8 (or 5) + your Constitution modifier per warlock level',
        value: 5,
      },
      hitPointsAtLevelOne: {
        info: '8 + your Constitution modifier',
        value: 8,
      },
    },
    proficiencies: {
      armorProficiency: [...lightArmor],
      weaponProficiency: [...simpleWeapons],
      savingThrows: ['wisdom', 'charisma'],
      skills: {
        choices: [
          SkillProficiencies[2],
          SkillProficiencies[4],
          SkillProficiencies[5],
          SkillProficiencies[7],
          SkillProficiencies[8],
          SkillProficiencies[10],
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
      features: ['pact magic', 'otherworldly patron'],
      proficiencyBonus: 2,
    },
    {
      features: ['eldritch invocations'],
      proficiencyBonus: 2,
    },
    {
      features: ['pact boon'],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: [],
      proficiencyBonus: 3,
    },
    {
      features: ['otherworldly patron feature'],
      proficiencyBonus: 3,
    },
    {
      features: [],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 3,
    },
    {
      features: [],
      proficiencyBonus: 4,
    },
    {
      features: ['otherworldly patron feature'],
      proficiencyBonus: 4,
    },
    {
      features: ['mystic arcanum(6th level)'],
      proficiencyBonus: 4,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 4,
    },
    {
      features: ['mystic arcanum (7th level)'],
      proficiencyBonus: 5,
    },
    {
      features: ['otherworldly patron feature'],
      proficiencyBonus: 5,
    },
    {
      features: ['mystic arcanum (8th level)'],
      proficiencyBonus: 5,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 5,
    },
    {
      features: ['mystic arcanum (9th level)'],
      proficiencyBonus: 6,
    },
    {
      features: [],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['eldritch master'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'a light crossbow and 20 bolts or a simple weapon',
    'a component pouch of arcane focus',
    "a scholar's pack or a dungeoneer's pack",
    'leather armor, any simple weapon, and two daggers',
  ],
}

export default warlock
