import { WeaponType } from '@/data/types/weaponTypes'

export const maul: WeaponType = {
  name: 'maul',
  cost: 10,
  damage: {
    diceNumber: 2,
    diceSides: 6,
    damageType: 'bludgeoning',
  },
  weight: 10,
  properties: ['heavy', 'two-handed'],
}
