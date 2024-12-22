import { musicalInstruments } from '../equipment/generalEquipment'
import { skillsList } from '../skills/skills'
import { mainClassType } from './types/mainClassType'

export const bardClass: mainClassType = {
  name: 'bard',
  accentText:
    'An performer who sooths hurts, inspires allies, and confounds enemies',
  description:
    'The bard is a master of song, speech, and the magic they contain. The music of bards is an attempt to snatch and harness the echoes of the Words of Creation, subtly weave them into their spells and powers. A bard’s life is spent wandering across the land gathering lore, telling stories, and living on the gratitude of audiences, much like any other entertainer. But a depth of knowledge, a level of musical skill, and a touch of magic set bards apart from their fellows',
  image: {
    m: '/images/classes/bard-m.png',
    f: '/images/classes/bard-f.png',
  },
  primaryAbility: 'charisma',
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
        selections: 3,
        fixed: 'none',
        options: musicalInstruments,
      },
      savingThrows: ['dexterity', 'charisma'],
      skills: {
        selections: 3,
        choices: skillsList,
      },
    },
  },
  startingEquipment: [
    'a rapier, a longsword, or any simple weapon',
    'dagger',
    "diplomat's pack or entertainer's pack",
    'leather armor',
  ],
  classProgression: [
    {
      proficiencyBonus: 2,
      features: ['spellcasting', 'bardic inspiration(1d6)'],
    },
    {
      proficiencyBonus: 2,
      features: ['Jack of all trades', 'song of rest(1d6)'],
    },
    {
      proficiencyBonus: 2,
      features: ['Bardic College', 'expertise'],
    },
    {
      proficiencyBonus: 2,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 3,
      features: ['bardic inspiration(1d8)', 'font of inspiration'],
    },
    {
      proficiencyBonus: 3,
      features: ['countercharm', 'bardic college feature'],
    },
    {
      proficiencyBonus: 3,
      features: [],
    },
    {
      proficiencyBonus: 3,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 4,
      features: ['song of rest(1d8)'],
    },
    {
      proficiencyBonus: 4,
      features: ['bardic inspiration(1d10)', 'expertise', 'magical secrets'],
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
      features: ['song of rest(1d10)'],
    },
    {
      proficiencyBonus: 5,
      features: ['magical secrets', 'bardic college feature'],
    },
    {
      proficiencyBonus: 5,
      features: ['badric inspiration(1d12)'],
    },
    {
      proficiencyBonus: 5,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['song of rest(1d12)'],
    },
    {
      proficiencyBonus: 6,
      features: ['magic secrets'],
    },
    {
      proficiencyBonus: 6,
      features: ['Ability Score Improvement'],
    },
    {
      proficiencyBonus: 6,
      features: ['Superior Inspiration'],
    },
  ],
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
}
