import { ArmorType } from '@/data/types/armorType'

export const hideArmor: ArmorType = {
  name: 'hide armor',
  cost: 10,
  armorClass: {
    value: 12,
    dexMod: true,
    dexMax: {
      max: true,
      value: 2,
    },
  },
  strengthReq: 0,
  stealthDisadvantage: false,
  weight: 12,
}
