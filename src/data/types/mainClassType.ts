import { toolType } from '@/data/types/equipmentTypes'
import { ArmorType } from './armorType'
import { ProficiencyType } from './ProficienciesType'
import { WeaponType } from './weaponTypes'

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
      hitPointsAtHigherLevels: {
        info: string
        value: number
      }
    }
    proficiencies: {
      armorProficiency: ArmorType[] | 'none'
      weaponProficiency: WeaponType[]
      tools: {
        selections: number
        fixed: toolType | toolType[] | 'none'
        options: toolType | toolType[] | 'none'
      }
      savingThrows: AbilityType[]
      skills: {
        selections: number
        choices: ProficiencyType[]
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
