import { WeaponType } from '@/data/types/weaponTypes'

export const lightHammer: WeaponType = {
  name: 'light hammer',
  cost: 2,
  damage: {
    diceNumber: 1,
    diceSides: 4,
    damageType: 'bludgeoning',
  },
  weight: 2,
  properties: ['light', 'thrown (range 20/60)'],
}
