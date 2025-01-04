import { SpeciesType } from '../types/speciesType'

export const tiefling: SpeciesType = {
  name: '',
  description: '',
  abilityScore: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  ageMax: 0,
  alignment: {
    description: '',
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
  speed: 0,
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
  languages: [],
  subSpecies: [
    {
      name: '',
      description: '',
      abilityScoreAdjustment: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      specialTraits: [
        {
          name: '',
          description: '',
        },
      ],
    },
  ],
}
