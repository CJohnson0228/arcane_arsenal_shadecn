import { WeaponType } from '@/data/types/weaponTypes'

export const warPick: WeaponType = {
  name: 'war pick',
  cost: 5,
  damage: {
    diceNumber: 1,
    diceSides: 8,
    damageType: 'piercing',
  },
  weight: 2,
  properties: undefined,
}
