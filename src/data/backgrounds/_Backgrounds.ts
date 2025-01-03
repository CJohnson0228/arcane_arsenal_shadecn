import { languages } from '../misc/languages'
import { toolType } from '../types/equipmentTypes'
import { ProficiencyType } from '../types/ProficienciesType'
import { acolyte } from './acolyte'
import { charlatan } from './charlatan'
import { criminal } from './criminal'
import { entertainer } from './entertainer'
import { folkhero } from './folkhero'
import { guildartisan } from './guildartisan'
import { hermit } from './hermit'
import { noble } from './noble'
import { outlander } from './outlander'
import { sage } from './sage'
import { sailor } from './sailor'
import { soldier } from './soldier'
import { urchin } from './urchin'

export const backgrounds = {
  acolyte: acolyte,
  charlatan: charlatan,
  criminal: criminal,
  entertainer: entertainer,
  folkhero: folkhero,
  guildartisan: guildartisan,
  hermit: hermit,
  noble: noble,
  outlander: outlander,
  sage: sage,
  sailor: sailor,
  soldier: soldier,
  urchin: urchin,
}

export type BackgroundType = {
  name: string
  description: string
  startingProficiencies: {
    given: (ProficiencyType | toolType)[]
    select?: {
      choices: number
      options: (ProficiencyType | toolType)[]
    }
  }
  languageOptions: {
    choose: number
    from: typeof languages
  }
  startingCoin: {
    copper: number
    silver: number
    electrum: number
    gold: number
    platinum: number
  }
  startingEquipment: {
    fixed: (string | toolType)[]
    choices: {
      options: (string | toolType)[]
      selection: number
    }
  }
  feature: {
    name: string
    description: string[]
    special?: {
      name: string
      choices: {
        dice: number
        options: string[]
      }
    }
  }
  personailityTraits: {
    choose: number
    from: string[]
  }
  ideal: {
    choose: number
    from: string[]
  }
  bond: {
    choose: number
    from: string[]
  }
  flaw: {
    choose: number
    from: string[]
  }
}
