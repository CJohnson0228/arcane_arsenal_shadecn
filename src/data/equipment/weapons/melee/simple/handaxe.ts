import { WeaponType } from '@/data/types/weaponTypes'

export const handaxe: WeaponType = {
  name: 'handaxe',
  cost: 5,
  damage: {
    diceNumber: 1,
    diceSides: 6,
    damageType: 'slashing',
  },
  weight: 2,
  properties: ['light', 'thrown (range 20/60)'],
}
