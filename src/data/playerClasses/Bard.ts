import { mainClassType } from '@/data/types/mainClassType'
import { lightArmor } from '../equipment/armor/armor'
import { musicalInstruments } from '../equipment/generalEquipment'
import {
  martialMeleeWeapons,
  martialRangedWeapons,
  simpleWeapons,
} from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'

const bard: mainClassType = {
  name: 'bard',
  accentText:
    'A performer who sooths hurts, inspires allies, and confounds enemies',
  description:
    'The bard is a master of song, speech, and the magic they contain. The music of bards is an attempt to snatch and harness the echoes of the Words of Creation, subtly weave them into their spells and powers. A bard’s life is spent wandering across the land gathering lore, telling stories, and living on the gratitude of audiences, much like any other entertainer. But a depth of knowledge, a level of musical skill, and a touch of magic set bards apart from their fellows',
  primaryAbility: 'charisma',
  subclasses: {
    choiceLevel: 3,
    options: [
      'college of lore',
      'college of valor',
      'college of glamour',
      'college of swords',
      'college of whispers',
      'college of eloquence',
      'college of creation',
    ],
  },
  image: {
    m: '/images/classes/bard-m.png',
    f: '/images/classes/bard-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 8,
      hitPointsAtHigherLevels: {
        info: '1d8 (or 5) + your Constitution modifier per bard level after 1st',
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
      savingThrows: ['dexterity', 'charisma'],
      skills: {
        choices: SkillProficiencies,
        selections: 3,
      },
      tools: {
        fixed: 'none',
        options: musicalInstruments,
        selections: 3,
      },
    },
  },
  classProgression: [
    {
      features: ['spellcasting', 'bardic inspiration (1d6)'],
      proficiencyBonus: 2,
    },
    {
      features: ['jack of all trades'],
      proficiencyBonus: 2,
    },
    {
      features: ['bardic college', 'expertise'],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: ['bardic inspiration (1d8)', 'font of inspiration'],
      proficiencyBonus: 3,
    },
    {
      features: ['countercharm', 'bardic college feature'],
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
      features: ['song of rest (1d8)'],
      proficiencyBonus: 4,
    },
    {
      features: ['bardic inspiration (1d10)', 'expertise', 'magical secrets'],
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
      features: ['song of rest (1d10)'],
      proficiencyBonus: 5,
    },
    {
      features: ['magical secrets', 'bardic college feature'],
      proficiencyBonus: 5,
    },
    {
      features: ['bardic inspiration (1d12)'],
      proficiencyBonus: 5,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 5,
    },
    {
      features: ['song of rest (1d12)'],
      proficiencyBonus: 6,
    },
    {
      features: ['magic secrets'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['superior inspiration'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'a rapier, a longsword, or any simple weapon',
    'dagger',
    "diplomat's pack or entertainer's pack",
    'leather armor',
  ],
}

export default bard
