import { WeaponType } from '@/data/types/weaponTypes'

export const heavyCrossbow: WeaponType = {
  name: 'heavy crossbow',
  cost: 50,
  damage: {
    diceNumber: 1,
    diceSides: 10,
    damageType: 'piercing',
  },
  weight: 18,
  properties: ['ammunition (range 100/400)', 'heavy', 'two-handed'],
}
