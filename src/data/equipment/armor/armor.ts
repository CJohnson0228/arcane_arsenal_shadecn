import { chainMailArmor } from './heavyArmor/chainMailArmor'
import { plateArmor } from './heavyArmor/plateArmor'
import { ringMailArmor } from './heavyArmor/ringMailArmor'
import { splintArmor } from './heavyArmor/splintArmor'
import { leatherArmor } from './lightArmor/leatherArmor'
import { paddedArmor } from './lightArmor/paddedArmor'
import { studdedLeatherArmor } from './lightArmor/studdedleatherArmor'
import { breastplateArmor } from './mediumArmor/breastplateArmor'
import { chainShirtArmor } from './mediumArmor/chainshirtArmor'
import { halfPlateArmor } from './mediumArmor/halfPlateArmor'
import { hideArmor } from './mediumArmor/hideArmor'
import { scalemailArmor } from './mediumArmor/scalemailArmor'
import { shieldArmor } from './shields/shieldArmor'

export const heavyArmor = [
  ringMailArmor,
  chainMailArmor,
  splintArmor,
  plateArmor,
]

export const mediumArmor = [
  hideArmor,
  chainShirtArmor,
  scalemailArmor,
  breastplateArmor,
  halfPlateArmor,
]

export const lightArmor = [paddedArmor, leatherArmor, studdedLeatherArmor]

export const shields = [shieldArmor]

export const allBasicArmor = [
  ...heavyArmor,
  ...mediumArmor,
  ...lightArmor,
  ...shields,
]
