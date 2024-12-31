import { WeaponType } from '@/data/types/weaponTypes'

export const glaive: WeaponType = {
  name: 'glaive',
  cost: 20,
  damage: {
    diceNumber: 1,
    diceSides: 10,
    damageType: 'slashing',
  },
  weight: 6,
  properties: ['heavy', 'two-handed', 'reach'],
}
