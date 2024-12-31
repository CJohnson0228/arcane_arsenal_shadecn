import { WeaponType } from '@/data/types/weaponTypes'

export const dart: WeaponType = {
  name: 'dart',
  cost: 0.05,
  damage: {
    diceNumber: 1,
    diceSides: 4,
    damageType: 'piercing',
  },
  weight: 0.25,
  properties: ['finesse', 'thrown (range 20/60)'],
}
