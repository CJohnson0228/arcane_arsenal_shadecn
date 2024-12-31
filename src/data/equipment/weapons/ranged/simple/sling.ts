import { WeaponType } from '@/data/types/weaponTypes'

export const sling: WeaponType = {
  name: 'sling',
  cost: 0.1,
  damage: {
    diceNumber: 1,
    diceSides: 4,
    damageType: 'bludgeoning',
  },
  weight: 0,
  properties: 'ammunition (range 30/120)',
}
