import { WeaponType } from '@/data/types/weaponTypes'

export const dagger: WeaponType = {
  name: 'dagger',
  cost: 2,
  damage: {
    diceNumber: 1,
    diceSides: 4,
    damageType: 'piercing',
  },
  weight: 1,
  properties: ['light', 'finesse', 'thrown(range 20/60)'],
}
