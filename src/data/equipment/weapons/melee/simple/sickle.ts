import { WeaponType } from '@/data/types/weaponTypes'

export const sickle: WeaponType = {
  name: 'sickle',
  cost: 1,
  damage: {
    diceNumber: 1,
    diceSides: 4,
    damageType: 'slashing',
  },
  weight: 2,
  properties: 'light',
}
