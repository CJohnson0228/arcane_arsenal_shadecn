import { WeaponType } from '@/data/types/weaponTypes'

export const greatClub: WeaponType = {
  name: 'great club',
  cost: 0.2,
  damage: {
    diceNumber: 1,
    diceSides: 8,
    damageType: 'bludgeoning',
  },
  weight: 10,
  properties: 'two-handed',
}
