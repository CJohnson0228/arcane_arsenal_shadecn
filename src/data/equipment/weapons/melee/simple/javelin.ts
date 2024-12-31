import { WeaponType } from '@/data/types/weaponTypes'

export const javelin: WeaponType = {
  name: 'javelin',
  cost: 0.5,
  damage: {
    diceNumber: 1,
    diceSides: 6,
    damageType: 'piercing',
  },
  weight: 2,
  properties: 'thrown (range 30/120)',
}
