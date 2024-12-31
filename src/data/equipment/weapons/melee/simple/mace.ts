import { WeaponType } from '@/data/types/weaponTypes'

export const mace: WeaponType = {
  name: 'mace',
  cost: 5,
  damage: {
    diceNumber: 1,
    diceSides: 6,
    damageType: 'bludgeoning',
  },
  weight: 4,
  properties: 'light',
}
