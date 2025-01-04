import { SpeciesType } from '../types/speciesType'

export const human: SpeciesType = {
  name: 'human',
  description:
    "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
  abilityScore: {
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  },
  ageMax: 80,
  alignment: {
    description:
      'Humans tend toward no particular alignment. The best and the worst are found among them.',
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
      name: '',
      description: '',
    },
  ],
  languages: ['common'],
  subSpecies: [],
}
