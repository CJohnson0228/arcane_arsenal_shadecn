import { ArmorType } from '@/data/types/armorType'

export const plateArmor: ArmorType = {
  name: 'plate armor',
  cost: 1500,
  armorClass: {
    value: 18,
    dexMod: false,
    dexMax: {
      max: true,
      value: 0,
    },
  },
  strengthReq: 15,
  stealthDisadvantage: true,
  weight: 65,
}
