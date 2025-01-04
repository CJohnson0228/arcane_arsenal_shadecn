import { languages } from '../misc/languages'
import { ArmorType } from './armorType'
import { toolType } from './equipmentTypes'
import { AbilityType } from './mainClassType'
import { ProficiencyType } from './ProficienciesType'
import { WeaponType } from './weaponTypes'

export type SpeciesType = {
  name: string
  description: string
  abilityScore: {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
  }
  ageMax: number
  alignment: {
    description: string
    choices: (
      | 'lawful-good'
      | 'lawful-neutral'
      | 'lawful-evil'
      | 'neutral-good'
      | 'true neutral'
      | 'neutral-evil'
      | 'chaotic-good'
      | 'chaotic-neutral'
      | 'chaotic-evil'
    )[]
  }
  size: 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gargantuan'
  speed: number
  darkvision: {
    has: boolean
    range: number
  }
  proficiencies: {
    armorProficiency: ArmorType[] | 'none'
    weaponProficiency: WeaponType[] | 'none'
    tools: {
      selections: number
      fixed: toolType | toolType[] | 'none'
      options: toolType | toolType[] | 'none'
    }
    savingThrows: AbilityType[] | 'none'
    skills: {
      selections: number
      choices: ProficiencyType[] | 'none'
    }
  }
  speciesTraits: {
    name: string
    description: string
  }[]
  languages: typeof languages
  subSpecies: {
    name: string
    description: string
    abilityScoreAdjustment: {
      strength: number
      dexterity: number
      constitution: number
      intelligence: number
      wisdom: number
      charisma: number
    }
    specialTraits: {
      name: string
      description: string
    }[]
  }[]
}
