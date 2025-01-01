import { allBasicArmor } from '../equipment/armor/armor'
import { allWeapons } from '../equipment/weapons/weapons'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { mainClassType } from '../types/mainClassType'

const paladin: mainClassType = {
  name: 'paladin',
  accentText: 'A Holy Knight bound by an Oath',
  description:
    "paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.",
  primaryAbility: 'strength',
  subclasses: {
    choiceLevel: 3,
    options: [
      'oath of devotion',
      'oath of the ancients',
      'oath of vengeance',
      'oath of conquest',
      'oath of redemption',
      'oath of glory',
      'oath of the watchers',
    ],
  },
  image: {
    m: '/images/classes/paladin-m.png',
    f: '/images/classes/paladin-f.png',
  },
  classFeatures: {
    hitPoints: {
      hitDice: 10,
      hitPointsAtHigherLevels: {
        info: '1d10 (or 6) + your Constitution modifier per paladin level',
        value: 6,
      },
      hitPointsAtLevelOne: {
        info: '10 + your Consitution modifier',
        value: 10,
      },
    },
    proficiencies: {
      armorProficiency: [...allBasicArmor],
      weaponProficiency: [...allWeapons],
      savingThrows: ['wisdom', 'charisma'],
      skills: {
        choices: [
          SkillProficiencies[3],
          SkillProficiencies[6],
          SkillProficiencies[7],
          SkillProficiencies[9],
          SkillProficiencies[13],
          SkillProficiencies[14],
        ],
        selections: 2,
      },
      tools: {
        fixed: 'none',
        options: 'none',
        selections: 0,
      },
    },
  },
  classProgression: [
    {
      features: ['divine sense', 'lay of hands'],
      proficiencyBonus: 2,
    },
    {
      features: ['fighting style', 'spellcasting', 'divine smite'],
      proficiencyBonus: 2,
    },
    {
      features: ['divine health', 'sacred oath'],
      proficiencyBonus: 2,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 2,
    },
    {
      features: ['extra attack'],
      proficiencyBonus: 3,
    },
    {
      features: ['aura of protection'],
      proficiencyBonus: 3,
    },
    {
      features: ['sacred oath feature'],
      proficiencyBonus: 3,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 3,
    },
    {
      features: [],
      proficiencyBonus: 4,
    },
    {
      features: ['aura of courage'],
      proficiencyBonus: 4,
    },
    {
      features: ['improved divine smite'],
      proficiencyBonus: 4,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 4,
    },
    {
      features: [],
      proficiencyBonus: 5,
    },
    {
      features: ['cleansing touch'],
      proficiencyBonus: 5,
    },
    {
      features: ['sacred oath feature'],
      proficiencyBonus: 5,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 5,
    },
    {
      features: [],
      proficiencyBonus: 6,
    },
    {
      features: ['aura improvements'],
      proficiencyBonus: 6,
    },
    {
      features: ['ability score improvement'],
      proficiencyBonus: 6,
    },
    {
      features: ['sacred oath feature'],
      proficiencyBonus: 6,
    },
  ],
  startingEquipment: [
    'chainmail',
    'a martial weapon and shield or two martial weapons',
    'five javelins or any simple melee weapon',
    "a prist's pack or an explorer's pack",
    'a holy symbol',
  ],
}

export default paladin
