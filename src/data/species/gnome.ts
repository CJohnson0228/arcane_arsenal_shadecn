import { SpeciesType } from '../types/speciesType'

export const gnome: SpeciesType = {
  name: 'gnome',
  description:
    'A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their closeknit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.',
  abilityScore: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 2,
    wisdom: 0,
    charisma: 0,
  },
  ageMax: 500,
  alignment: {
    description:
      'Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.',
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
  speed: 20,
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
