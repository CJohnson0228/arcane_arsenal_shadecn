import { ArmorType } from '@/data/types/armorType'

export const breastplateArmor: ArmorType = {
  name: 'breastplate',
  cost: 400,
  armorClass: {
    value: 14,
    dexMod: true,
    dexMax: {
      max: true,
      value: 2,
    },
  },
  strengthReq: 0,
  stealthDisadvantage: false,
  weight: 20,
}
