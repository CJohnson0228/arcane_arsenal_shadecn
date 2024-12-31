import { WeaponType } from '@/data/types/weaponTypes'

export const net: WeaponType = {
  name: 'net',
  cost: 1,
  damage: {
    diceNumber: 0,
    diceSides: 0,
    damageType: 'none',
  },
  weight: 3,
  properties: ['thrown (range 5/15)', 'special'],
}
