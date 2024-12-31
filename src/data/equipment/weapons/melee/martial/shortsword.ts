import { WeaponType } from '@/data/types/weaponTypes'

export const shortsword: WeaponType = {
  name: 'shortsword',
  cost: 10,
  damage: {
    diceNumber: 1,
    diceSides: 6,
    damageType: 'piercing',
  },
  weight: 2,
  properties: ['finesse', 'light'],
}
