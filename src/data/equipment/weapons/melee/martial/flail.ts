import { WeaponType } from '@/data/types/weaponTypes'

export const flail: WeaponType = {
  name: 'flail',
  cost: 10,
  damage: {
    diceNumber: 1,
    diceSides: 8,
    damageType: 'bludgeoning',
  },
  weight: 2,
  properties: undefined,
}
