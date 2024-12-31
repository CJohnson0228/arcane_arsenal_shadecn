import { WeaponType } from '@/data/types/weaponTypes'

export const trident: WeaponType = {
  name: 'trident',
  cost: 5,
  damage: {
    diceNumber: 1,
    diceSides: 6,
    damageType: 'piercing',
  },
  weight: 4,
  properties: ['thrown (range 20/60)', 'versatile (1d8)'],
}
