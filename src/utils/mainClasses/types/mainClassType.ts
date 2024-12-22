import { allArmorType } from '@/utils/equipment/types/armorTypes'
import { toolType } from '@/utils/equipment/types/equipmentTypes'
import { allWeaponsType } from '@/utils/equipment/types/weaponTypes'
import { skillsListType } from '@/utils/skills/types/skillsListType'

export type ClassNameType =
  | 'artificer'
  | 'barbarian'
  | 'bard'
  | 'cleric'
  | 'druid'
  | 'fighter'
  | 'monk'
  | 'paladin'
  | 'ranger'
  | 'rogue'
  | 'sorcerer'
  | 'warlock'
  | 'wizard'

export type AbilityType =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'wisdom'
  | 'charisma'

export type ProgressionType = {
  proficiencyBonus: number
  features: string[]
}

export interface mainClassType {
  name: ClassNameType
  accentText: string
  description: string
  image: { m: string; f: string }
  primaryAbility: AbilityType
  classFeatures: {
    hitPoints: {
      hitDice: 6 | 8 | 10 | 12
      hitPointsAtLevelOne: {
        info: string
        value: number
      }
      hitPoinmtsAtHigherLevels: {
        info: string
        value: number
      }
    }
    proficiencies: {
      armorProficiency:
        | (
            | allArmorType
            | 'light armor'
            | 'medium armor'
            | 'heavy armor'
            | 'shields'
          )[]
        | 'none'
      weaponProficiency: (
        | allWeaponsType
        | 'simple weapons'
        | 'martial weapons'
      )[]
      tools: {
        selections: number
        fixed: toolType | toolType[] | 'none'
        options: toolType | toolType[] | 'none'
      }
      savingThrows: AbilityType[]
      skills: {
        selections: number
        choices: skillsListType[]
      }
    }
  }
  startingEquipment: string[]
  classProgression: ProgressionType[]
  subclasses: {
    choiceLevel: number
    options: string[]
  }
}
