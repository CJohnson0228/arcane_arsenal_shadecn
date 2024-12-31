import { WeaponType } from '@/data/types/weaponTypes'

export const pike: WeaponType = {
  name: 'pike',
  cost: 5,
  damage: {
    diceNumber: 1,
    diceSides: 10,
    damageType: 'piercing',
  },
  weight: 18,
  properties: ['heavy', 'two-handed', 'reach'],
}
