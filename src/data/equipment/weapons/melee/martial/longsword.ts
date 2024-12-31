import { WeaponType } from '@/data/types/weaponTypes'

export const longsword: WeaponType = {
  name: 'longsword',
  cost: 15,
  damage: {
    diceNumber: 1,
    diceSides: 8,
    damageType: 'slashing',
  },
  weight: 3,
  properties: 'versatile (1d10)',
}
