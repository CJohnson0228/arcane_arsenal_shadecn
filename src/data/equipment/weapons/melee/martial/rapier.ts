import { WeaponType } from '@/data/types/weaponTypes'

export const rapier: WeaponType = {
  name: 'rapier',
  cost: 25,
  damage: {
    diceNumber: 1,
    diceSides: 8,
    damageType: 'piercing',
  },
  weight: 2,
  properties: 'finesse',
}
