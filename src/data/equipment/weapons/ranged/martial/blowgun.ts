import { WeaponType } from '@/data/types/weaponTypes'

export const blowgun: WeaponType = {
  name: 'blowgun',
  cost: 10,
  damage: {
    diceNumber: 1,
    diceSides: 1,
    damageType: 'piercing',
  },
  weight: 1,
  properties: 'ammunition (range 25/100)',
}
