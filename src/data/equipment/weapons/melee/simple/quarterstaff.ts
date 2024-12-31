import { WeaponType } from '@/data/types/weaponTypes'

export const quarterstaff: WeaponType = {
  name: 'quarterstaff',
  cost: 0.2,
  damage: {
    diceNumber: 1,
    diceSides: 6,
    damageType: 'bludgeoning',
  },
  weight: 2,
  properties: 'versatile(1d8)',
}
