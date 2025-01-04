import { SpeciesType } from '../types/speciesType'

export const dragonborn: SpeciesType = {
  name: 'dragonborn',
  description:
    'Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incom prehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.',
  abilityScore: {
    strength: 2,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 1,
  },
  ageMax: 80,
  alignment: {
    description:
      'Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil (represented by Bahamut and Tiamat, respectively). Most dragonborn are good, but those who side with Tiamat can be terrible villains.',
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
      name: 'draconic ancestory',
      description:
        'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type.',
    },
    {
      name: 'breath weapon',
      description:
        "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you com plete a short or long rest.",
    },
    {
      name: 'damage resistance',
      description:
        'You have resistance to the damage type associated with your draconic ancestry',
    },
  ],
  languages: ['common', 'draconic'],
  subSpecies: [
    {
      name: 'black dragon heritage',
      description: 'Your ancestor is that of a black dragon.',
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
          name: 'acid breath weapon',
          description: 'acid damage in a 5 by 30ft. line (dexterity save)',
        },
        {
          name: 'acid resistance',
          description: 'you are resistant to acid damage',
        },
      ],
    },
    {
      name: 'blue dragon heritage',
      description: 'Your ancestor is that of a blue dragon.',
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
          name: 'lightning breath weapon',
          description: 'lightning damage in a 5 by 30ft. line (dexterity save)',
        },
        {
          name: 'lightning resistance',
          description: 'you are resistant to lightning damage',
        },
      ],
    },
    {
      name: 'brass dragon heritage',
      description: 'Your ancestor is that of a brass dragon.',
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
          name: 'fire breath weapon',
          description: 'fire damage in a 5 by 30ft. line (dexterity save)',
        },
        {
          name: 'fire resistance',
          description: 'you are resistant to fire damage',
        },
      ],
    },
    {
      name: 'bronze dragon heritage',
      description: 'Your ancestor is that of a bronze dragon.',
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
          name: 'lightning breath weapon',
          description: 'lightning damage in a 5 by 30ft. line (dexterity save)',
        },
        {
          name: 'lightning resistance',
          description: 'you are resistant to lightning damage',
        },
      ],
    },
    {
      name: 'copper dragon heritage',
      description: 'Your ancestor is that of a copper dragon.',
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
          name: 'acid breath weapon',
          description: 'acid damage in a 5 by 30ft. line (dexterity save)',
        },
        {
          name: 'acid resistance',
          description: 'you are resistant to acid damage',
        },
      ],
    },
    {
      name: 'gold dragon heritage',
      description: 'Your ancestor is that of a gold dragon.',
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
          name: 'fire breath weapon',
          description: 'fire damage in 15ft. cone (dexterity save)',
        },
        {
          name: 'fire resistance',
          description: 'you are resistant to fire damage',
        },
      ],
    },
    {
      name: 'green dragon heritage',
      description: 'Your ancestor is that of a green dragon.',
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
          name: 'poison breath weapon',
          description: 'poison damage in 15ft. cone (dexterity save)',
        },
        {
          name: 'poison resistance',
          description: 'you are resistant to poison damage',
        },
      ],
    },
    {
      name: 'red dragon heritage',
      description: 'Your ancestor is that of a red dragon.',
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
          name: 'fire breath weapon',
          description: 'fire damage in 15ft. cone (dexterity save)',
        },
        {
          name: 'fire resistance',
          description: 'you are resistant to fire damage',
        },
      ],
    },
    {
      name: 'silver dragon heritage',
      description: 'Your ancestor is that of a silver dragon.',
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
          name: 'cold breath weapon',
          description: 'cold damage in 15ft. cone (dexterity save)',
        },
        {
          name: 'cold resistance',
          description: 'you are resistant to cold damage',
        },
      ],
    },
    {
      name: 'white dragon heritage',
      description: 'Your ancestor is that of a white dragon.',
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
          name: 'cold breath weapon',
          description: 'cold damage in 15ft. cone (dexterity save)',
        },
        {
          name: 'cold resistance',
          description: 'you are resistant to cold damage',
        },
      ],
    },
  ],
}
