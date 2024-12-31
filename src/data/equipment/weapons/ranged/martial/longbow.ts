import { WeaponType } from '@/data/types/weaponTypes'

export const longbow: WeaponType = {
  name: 'longbow',
  cost: 50,
  damage: {
    diceNumber: 1,
    diceSides: 8,
    damageType: 'piercing',
  },
  weight: 2,
  properties: ['ammunition (range 150/600)', 'heavy', 'two-handed'],
}
