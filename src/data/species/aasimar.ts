import { SpeciesType } from '../types/speciesType'

export const aasimar: SpeciesType = {
  name: 'aasimar',
  description:
    'Aasimar bear within their souls the light of the heavens. They are descended from humans with a touch of the power of Mount Celestia, the divine realm of many lawful good deities. Aasimar are born to serve as champions of the gods, their births hailed as blessed events. They are a people of otherworldly visages, with luminous features that reveal their celestial heritage.',
  abilityScore: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 2,
  },
  ageMax: 160,
  alignment: {
    description:
      'Imbued with celestial power, most aasimar are good. Outcast aasimar are most often neutral or even evil.',
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
      selections: 0,
      choices: 'none',
    },
  },
  speciesTraits: [
    {
      name: 'celetsial resistance',
      description: 'you have resistance to nectrotic and radiant damage.',
    },
    {
      name: 'healing hands',
      description:
        "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.",
    },
    {
      name: 'light bearer',
      description:
        'You know the light cantrip. Charisma is your spellcasting ability for it.',
    },
  ],
  languages: ['common', 'celestial'],
  subSpecies: [
    {
      name: 'protector aasimar',
      description:
        'Protector aasimar are charged by the powers of good to guard the weak, to strike at evil wherever it arises, and to stand vigilant against the darkness. From a young age, a protector aasimar receives advice and directives that urge to stand against evil.',
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
          name: 'radiant soul',
          description:
            "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        },
      ],
    },
    {
      name: 'scourge aasimar',
      description:
        'Scourge aasimar are imbued with a divine energy that blazes intensely within them. It feeds a powerful desire to destroy evil-a desire that is, at its best, unflinching and, at its worst, all-consuming. Many scourge aasimar wear masks to block out the world and focus on containing this power, unmasking themselves only in battle.',
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
          name: 'radiant consumption',
          description:
            "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        },
      ],
    },
    {
      name: 'fallen aasimar',
      description:
        'An aasimar who was touched by dark powers as a youth or who turns to evil in early adulthood can become one of the fallen-a group of aasimar whose inner light has been replaced by shadow.',
      abilityScoreAdjustment: {
        strength: 1,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      specialTraits: [
        {
          name: 'necrotic shroud',
          description:
            "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must each succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become frightened of you until the end of your next turn. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        },
      ],
    },
  ],
}
