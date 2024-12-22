import { tools } from '../equipment/generalEquipment'
import { mainClassType } from './types/mainClassType'

export const druidClass: mainClassType = {
  name: 'druid',
  accentText: 'a Priest of the Old Faith',
  description:
    'Druids weirld the powers of nature to preserve balance and protect life. They gain their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.',
  image: {
    m: '/images/classes/druid-m.png',
    f: '/images/classes/druid-f.png',
  },
  primaryAbility: 'wisdom',
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtLevelOne: {
        info: '8 + your Constitution modifier',
        value: 8,
      },
      hitPoinmtsAtHigherLevels: {
        info: '1d8 (or 5) + your Constitution modifier per druid level after 1st',
        value: 5,
      },
    },
    proficiencies: {
      armorProficiency: ['light armor', 'medium armor', 'shields'],
      weaponProficiency: [
        'club',
        'dagger',
        'dart',
        'javelin',
        'mace',
        'quarterstaff',
        'scimitar',
        'sickle',
        'sling',
        'spear',
      ],
      tools: {
        selections: 0,
        fixed: tools.herbalismKit,
        options: 'none',
      },
      savingThrows: ['intelligence', 'wisdom'],
      skills: {
        selections: 2,
        choices: [
          'arcana',
          'animal handling',
          'insight',
          'medicine',
          'nature',
          'perception',
          'religion',
          'survival',
        ],
      },
    },
  },
  startingEquipment: [
    'a wooden shield or any simple weapon',
    'scimitar or any simple melee weapon',
    'leather armor',
    "explorer's pack",
    'druidic focus',
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['druidic', 'spellcasting'],
    },
    {
      proficiencyBonus: 2,
      features: ['wild shape', 'druid circle'],
    },
    {
      proficiencyBonus: 2,
      features: [],
    },
    {
      proficiencyBonus: 2,
      features: ['wild shape improvement', 'Ability Score Improvement'],
    },
    {
      proficiencyBonus: 3,
      features: [],
    },
    {
      proficiencyBonus: 3,
      features: ['druid circle feature'],
    },
    {
      proficiencyBonus: 3,
      features: [],
    },
    {
      proficiencyBonus: 3,
      features: ['wild shape improvement', 'Ability Score Improvement'],
    },
    {
      proficiencyBonus: 4,
      features: [],
    },
    {
      proficiencyBonus: 4,
      features: ['druid circle feature'],
    },
    {
      proficiencyBonus: 4,
      features: [],
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
      features: ['druid circle feature'],
    },
    {
      proficiencyBonus: 5,
      features: [],
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
      features: ['Timeless Body', 'Beast Spells'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['Archdruid'],
    },
  ],
  subclasses: {
    choiceLevel: 2,
    options: [
      'circle of the land',
      'circle of the moon',
      'circle of dreams',
      'circle of the shepherd',
      'circle of spores',
      'circle of wildfire',
      'circle of stars',
    ],
  },
}
