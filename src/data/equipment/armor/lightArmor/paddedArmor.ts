import { ArmorType } from '@/data/types/armorType'

export const paddedArmor: ArmorType = {
  name: 'padded armor',
  cost: 5,
  armorClass: {
    value: 11,
    dexMod: true,
    dexMax: {
      max: false,
      value: 0,
    },
  },
  strengthReq: 0,
  stealthDisadvantage: true,
  weight: 8,
}
