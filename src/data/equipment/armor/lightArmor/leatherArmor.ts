import { ArmorType } from '@/data/types/armorType'

export const leatherArmor: ArmorType = {
  name: 'leather armor',
  cost: 10,
  armorClass: {
    value: 11,
    dexMod: true,
    dexMax: {
      max: false,
      value: 0,
    },
  },
  strengthReq: 0,
  stealthDisadvantage: false,
  weight: 10,
}
