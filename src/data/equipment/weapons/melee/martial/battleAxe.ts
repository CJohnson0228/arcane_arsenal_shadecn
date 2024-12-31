import { WeaponType } from '@/data/types/weaponTypes'

export const battleaxe: WeaponType = {
  name: 'battleaxe',
  cost: 10,
  damage: {
    diceNumber: 1,
    diceSides: 8,
    damageType: 'slashing',
  },
  weight: 4,
  properties: 'versatile (1d10)',
}
