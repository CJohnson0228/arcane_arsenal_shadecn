import { WeaponType } from '@/data/types/weaponTypes'

export const whip: WeaponType = {
  name: 'whip',
  cost: 2,
  damage: {
    diceNumber: 1,
    diceSides: 4,
    damageType: 'slashing',
  },
  weight: 3,
  properties: ['finesse', 'reach'],
}
