import { WeaponType } from '@/data/types/weaponTypes'

export const warhammer: WeaponType = {
  name: 'warhammer',
  cost: 15,
  damage: {
    diceNumber: 1,
    diceSides: 8,
    damageType: 'bludgeoning',
  },
  weight: 2,
  properties: 'versatile (1d10)',
}
