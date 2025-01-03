import { ArmorType } from '@/data/types/armorType'

export const studdedLeatherArmor: ArmorType = {
  name: 'studded leather armor',
  cost: 45,
  armorClass: {
    value: 12,
    dexMod: true,
    dexMax: {
      max: false,
      value: 0,
    },
  },
  strengthReq: 0,
  stealthDisadvantage: false,
  weight: 13,
}
