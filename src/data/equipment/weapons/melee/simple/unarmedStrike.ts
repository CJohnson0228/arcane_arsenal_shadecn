import { WeaponType } from '@/data/types/weaponTypes'

export const unarmedStrike: WeaponType = {
  name: 'unarmed strike',
  cost: 0,
  damage: {
    diceNumber: 1,
    diceSides: 1,
    damageType: 'bludgeoning',
  },
  weight: 0,
  properties: undefined,
}
