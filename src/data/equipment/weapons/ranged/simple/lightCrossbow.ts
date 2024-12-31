import { WeaponType } from '@/data/types/weaponTypes'

export const lightCrossbow: WeaponType = {
  name: 'light crossbow',
  cost: 25,
  damage: {
    diceNumber: 1,
    diceSides: 8,
    damageType: 'piercing',
  },
  weight: 5,
  properties: ['two-handed', 'ammunition (range 80/320)'],
}
