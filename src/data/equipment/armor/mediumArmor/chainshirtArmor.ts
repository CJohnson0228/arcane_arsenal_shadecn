import { ArmorType } from '@/data/types/armorType'

export const chainShirtArmor: ArmorType = {
  name: 'chain shirt',
  cost: 50,
  armorClass: {
    value: 13,
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
