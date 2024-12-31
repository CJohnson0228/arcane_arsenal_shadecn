import { WeaponType } from '@/data/types/weaponTypes'

export const greataxe: WeaponType = {
  name: 'greataxe',
  cost: 30,
  damage: {
    diceNumber: 1,
    diceSides: 12,
    damageType: 'slashing',
  },
  weight: 7,
  properties: ['heavy', 'two-handed'],
}
