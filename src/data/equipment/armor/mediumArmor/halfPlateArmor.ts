import { ArmorType } from '@/data/types/armorType'

export const halfPlateArmor: ArmorType = {
  name: 'half plate armor',
  cost: 750,
  armorClass: {
    value: 15,
    dexMod: true,
    dexMax: {
      max: true,
      value: 2,
    },
  },
  strengthReq: 0,
  stealthDisadvantage: true,
  weight: 40,
}
