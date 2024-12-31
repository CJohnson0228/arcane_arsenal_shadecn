import { WeaponType } from '@/data/types/weaponTypes'

export const shortbow: WeaponType = {
  name: 'shortbow',
  cost: 25,
  damage: {
    diceNumber: 1,
    diceSides: 6,
    damageType: 'piercing',
  },
  weight: 2,
  properties: ['two-handed', 'ammunition (range 80/320)'],
}
