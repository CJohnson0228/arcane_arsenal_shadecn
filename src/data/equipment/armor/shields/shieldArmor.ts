import { ArmorType } from '@/data/types/armorType'

export const shieldArmor: ArmorType = {
  name: 'shield',
  cost: 10,
  armorClass: {
    value: 2,
    dexMod: true,
    dexMax: {
      max: true,
      value: 0,
    },
  },
  strengthReq: 0,
  stealthDisadvantage: false,
  weight: 6,
}
