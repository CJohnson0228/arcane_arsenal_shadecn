import {
  martialMeleeWeapons,
  simpleMeleeWeapons,
} from '../equipment/weapons/weapons'
import { SpeciesType } from '../types/speciesType'

export const dwarf: SpeciesType = {
  name: 'dwarf',
  description:
    'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.',
  abilityScore: {
    strength: 0,
    dexterity: 0,
    constitution: 2,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  ageMax: 350,
  alignment: {
    description:
      'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
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
  speed: 25,
  darkvision: {
    has: true,
    range: 60,
  },
  proficiencies: {
    armorProficiency: 'none',
    weaponProficiency: [
      simpleMeleeWeapons[3],
      martialMeleeWeapons[0],
      martialMeleeWeapons[15],
    ],
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
      name: 'dwarven resilience',
      description:
        'You have advantage on saving throws against poison, and you have resistance against poison damage',
    },
    {
      name: 'dwarven combat training',
      description:
        'You have proficiency with the battleaxe, handaxe, throwing hammer, and warhammer.',
    },
  ],
  languages: ['common', 'dwarvish'],
  subSpecies: [
    {
      name: 'hill dwarf',
      description:
        'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerun in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.',
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
          name: 'dwarven toughness',
          description:
            'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
        },
      ],
    },
    {
      name: 'mountain dwarf',
      description:
        "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerun, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.",
      abilityScoreAdjustment: {
        strength: 2,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      specialTraits: [
        {
          name: 'dwarven armor training',
          description: 'You have proficiency with light and medium armor.',
        },
      ],
    },
  ],
}
