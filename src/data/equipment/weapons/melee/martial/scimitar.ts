import { WeaponType } from '@/data/types/weaponTypes'

export const scimitar: WeaponType = {
  name: 'scimitar',
  cost: 25,
  damage: {
    diceNumber: 1,
    diceSides: 6,
    damageType: 'slashing',
  },
  weight: 3,
  properties: ['finesse', 'light'],
}
