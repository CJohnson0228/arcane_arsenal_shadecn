import { WeaponType } from '@/data/types/weaponTypes'

export const handCrossbow: WeaponType = {
  name: 'hand crossbow',
  cost: 75,
  damage: {
    diceNumber: 1,
    diceSides: 6,
    damageType: 'piercing',
  },
  weight: 3,
  properties: ['ammunition (range 30/120)', 'light'],
}
