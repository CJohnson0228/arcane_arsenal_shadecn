import { ArmorType } from '@/data/types/armorType'

export const scalemailArmor: ArmorType = {
  name: 'scalemail armor',
  cost: 50,
  armorClass: {
    value: 14,
    dexMod: true,
    dexMax: {
      max: true,
      value: 2,
    },
  },
  strengthReq: 0,
  stealthDisadvantage: true,
  weight: 45,
}
