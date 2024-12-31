import { WeaponType } from '@/data/types/weaponTypes'

export const greatsword: WeaponType = {
  name: 'greatsword',
  cost: 50,
  damage: {
    diceNumber: 2,
    diceSides: 6,
    damageType: 'slashing',
  },
  weight: 6,
  properties: ['heavy', 'two-handed'],
}
