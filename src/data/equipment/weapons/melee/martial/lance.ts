import { WeaponType } from '@/data/types/weaponTypes'

export const lance: WeaponType = {
  name: 'lance',
  cost: 10,
  damage: {
    diceNumber: 1,
    diceSides: 12,
    damageType: 'piercing',
  },
  weight: 6,
  properties: ['special', 'reach'],
}
