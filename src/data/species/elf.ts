import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { SpeciesType } from '../types/speciesType'

export const elf: SpeciesType = {
  name: 'elf',
  description:
    'Elves are a magical people of otherworldly grace, living in the w orld but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.',
  abilityScore: {
    strength: 0,
    dexterity: 2,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  ageMax: 750,
  alignment: {
    description:
      "Elves love freedom , variety, and selfexpression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. D row are m ore often evil than not.",
    choices: [
      'lawful-good',
      'lawful-neutral',
      'lawful-evil',
      'neutral-good',
      'true neutral',
      'neutral-evil',
      'chaotic-good',
      'chaotic-neutral',
      'chaotic-evil',
    ],
  },
  size: 'medium',
  speed: 30,
  darkvision: {
    has: true,
    range: 60,
  },
  proficiencies: {
    armorProficiency: 'none',
    weaponProficiency: 'none',
    tools: {
      selections: 0,
      fixed: 'none',
      options: 'none',
    },
    savingThrows: 'none',
    skills: {
      selections: 1,
      choices: [SkillProficiencies[11]],
    },
  },
  speciesTraits: [
    {
      name: 'keen senses',
      description: 'you have proficiency in the Perception skill',
    },
    {
      name: 'fey ancestry',
      description:
        "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    },
    {
      name: 'trance',
      description:
        "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
    },
  ],
  languages: ['common', 'elvish'],
  subSpecies: [
    {
      name: 'high elf',
      description:
        'As a high elf, you have a keen mind and a mastery of at least the basics of magic.',
      abilityScoreAdjustment: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 1,
        wisdom: 0,
        charisma: 0,
      },
      specialTraits: [
        {
          name: 'elf weapon training',
          description:
            'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
        },
        {
          name: 'cantrip',
          description:
            'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it',
        },
        {
          name: 'extra language',
          description:
            'You can speak, read, and write one extra language of your choice.',
        },
      ],
    },
    {
      name: 'wood elf',
      description:
        'As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests',
      abilityScoreAdjustment: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 1,
        charisma: 0,
      },
      specialTraits: [
        {
          name: 'elf weapon training',
          description:
            'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
        },
        {
          name: 'fleet of foot',
          description: 'Your base walking speed increases to 35 feet.',
        },
        {
          name: 'mask of the wild',
          description:
            'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
        },
      ],
    },
    {
      name: 'drow elf',
      description:
        'Descended from an earlier subrace of dark-skinned elves, the drow were banished from the surface world for following the goddess Lolth down the path to evil and corruption',
      abilityScoreAdjustment: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 1,
      },
      specialTraits: [
        {
          name: 'superior darkvision',
          description: 'Your darkvision has a radius of 120 feet.',
        },
        {
          name: 'sunlight sensitivity',
          description:
            'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
        },
        {
          name: 'drow magic',
          description:
            'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.',
        },
        {
          name: 'drow weapon training',
          description:
            'You have proficiency with rapiers, shortswords, and hand crossbows.',
        },
      ],
    },
  ],
}
