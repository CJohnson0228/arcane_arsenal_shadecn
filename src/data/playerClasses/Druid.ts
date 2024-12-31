import { lightArmor, mediumArmor, shields } from '../equipment/armor/armor'
import { tools } from '../equipment/generalEquipment'
import {
  martialMeleeWeapons,
  simpleMeleeWeapons,
  simpleRangedWeapons,
} from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { mainClassType } from '../types/mainClassType'

const druid: mainClassType = {
  name: 'druid',
  accentText: 'A Priest of the Old Faith',
  description:
    'Druids weirld the powers of nature to preserve balance and protect life. They gain their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.',
  primaryAbility: 'wisdom',
  subclasses: {
    choiceLevel: 2,
    options: [
      'twilight domain',
      'circle of the land',
      'circle of the moon',
      'circle of dreams',
      'circle of the shepherd',
      'circle of spores',
      'circle of wildfire',
      'circle of stars',
    ],
  },
  image: {
    m: '/images/classes/druid-m.png',
    f: '/images/classes/druid-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtHigherLevels: {
        info: '1d8 (or 5) + your Constitution modifier per Druid level',
        value: 5,
      },
      hitPointsAtLevelOne: {
        info: '8 + Constitution Modifier',
        value: 8,
      },
    },
    proficiencies: {
      armorProficiency: [...lightArmor, ...mediumArmor, ...shields],
      weaponProficiency: [
        simpleMeleeWeapons[0],
        simpleMeleeWeapons[1],
        simpleMeleeWeapons[4],
        simpleMeleeWeapons[6],
        simpleMeleeWeapons[7],
        simpleMeleeWeapons[8],
        simpleMeleeWeapons[9],
        simpleRangedWeapons[0],
        martialMeleeWeapons[12],
      ],
      savingThrows: ['intelligence', 'wisdom'],
      skills: {
        choices: [
          SkillProficiencies[1],
          SkillProficiencies[2],
          SkillProficiencies[6],
          SkillProficiencies[9],
          SkillProficiencies[10],
          SkillProficiencies[11],
          SkillProficiencies[14],
          SkillProficiencies[17],
        ],
        selections: 2,
      },
      tools: {
        fixed: [tools.herbalismKit],
        options: 'none',
        selections: 0,
      },
    },
  },
  classProgression: [
    {
      features: ['druidic', 'spellcasting'],
      proficiencyBonus: 2,
    },
    {
      features: ['druidic circle', 'wildshape'],
      proficiencyBonus: 2,
    },
    {
      features: [],
      proficiencyBonus: 2,
    },
    {
      features: ['wildshape improvement', 'ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: [],
      proficiencyBonus: 3,
    },
    {
      features: ['druidic circle feature'],
      proficiencyBonus: 3,
    },
    {
      features: [],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement', 'wildshape improvement'],
      proficiencyBonus: 3,
    },
    {
      features: [],
      proficiencyBonus: 4,
    },
    {
      features: ['druidic circle feature'],
      proficiencyBonus: 4,
    },
    {
      features: [],
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
      features: ['druidic circle feature'],
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
      features: ['wimeless body', 'beast spells'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['Archdruid'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'a wooden shield or any simple weapon',
    'scimitar or any simple melee weapon',
    'leather armor',
    "explorer's pack",
    'druidic focus',
  ],
}

export default druid
