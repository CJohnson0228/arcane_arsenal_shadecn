import { ArmorType } from '@/data/types/armorType'

export const chainMailArmor: ArmorType = {
  name: 'chainmail armor',
  cost: 75,
  armorClass: {
    value: 16,
    dexMod: false,
    dexMax: {
      max: true,
      value: 0,
    },
  },
  strengthReq: 13,
  stealthDisadvantage: true,
  weight: 55,
}
