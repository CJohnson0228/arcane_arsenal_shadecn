import { WeaponType } from '@/data/types/weaponTypes'

export const club: WeaponType = {
  name: 'club',
  cost: 0.1,
  damage: {
    diceNumber: 1,
    diceSides: 4,
    damageType: 'bludgeoning',
  },
  weight: 2,
  properties: 'light',
}
