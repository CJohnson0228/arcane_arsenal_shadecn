import { WeaponType } from '@/data/types/weaponTypes'

export const spear: WeaponType = {
  name: 'spear',
  cost: 1,
  damage: {
    diceNumber: 1,
    diceSides: 6,
    damageType: 'piercing',
  },
  weight: 2,
  properties: ['thrown(range 20/60)', 'versatile(1d8)'],
}
