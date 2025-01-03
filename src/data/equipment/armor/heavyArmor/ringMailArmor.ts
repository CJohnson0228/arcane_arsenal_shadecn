import { ArmorType } from '@/data/types/armorType'

export const ringMailArmor: ArmorType = {
  name: 'ring mail armor',
  cost: 30,
  armorClass: {
    value: 14,
    dexMod: false,
    dexMax: {
      max: true,
      value: 0,
    },
  },
  strengthReq: 0,
  stealthDisadvantage: true,
  weight: 40,
}
