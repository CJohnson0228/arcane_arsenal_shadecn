import { SpeciesType } from '../types/speciesType'

export const halfling: SpeciesType = {
  name: 'halfling',
  description:
    "The comforts of home are goal of most halfling's lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along an dirt road or a raft floating downriver.",
  abilityScore: {
    strength: 0,
    dexterity: 2,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  ageMax: 150,
  alignment: {
    description:
      'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
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
  size: 'small',
  speed: 25,
  darkvision: {
    has: false,
    range: 0,
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
      selections: 0,
      choices: 'none',
    },
  },
  speciesTraits: [
    {
      name: 'lucky',
      description:
        'W hen you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
    },
    {
      name: 'brave',
      description:
        'You have advantage on saving throws against being frightened.',
    },
    {
      name: 'halfling nimbleness',
      description:
        'You can move through the space of any creature that is of a size larger than yours.',
    },
  ],
  languages: ['common', 'halfling'],
  subSpecies: [
    {
      name: 'lightfoot halfling',
      description:
        'As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others.',
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
          name: 'naturally stealthy',
          description:
            'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.',
        },
      ],
    },
    {
      name: 'stout halfling',
      description:
        "As a stout halfling, you're hardier than average and have some resistance to poison. Some say that stouts have dwarven blood",
      abilityScoreAdjustment: {
        strength: 0,
        dexterity: 0,
        constitution: 1,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      specialTraits: [
        {
          name: 'stout resilience',
          description:
            'You have advantage on saving throws against poison, and you have resistance against poison damage.',
        },
      ],
    },
  ],
}
