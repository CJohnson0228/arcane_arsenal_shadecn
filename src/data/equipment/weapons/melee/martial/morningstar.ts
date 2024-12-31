import { WeaponType } from '@/data/types/weaponTypes'

export const morningstar: WeaponType = {
  name: 'morningstar',
  cost: 15,
  damage: {
    diceNumber: 1,
    diceSides: 8,
    damageType: 'piercing',
  },
  weight: 4,
  properties: undefined,
}
