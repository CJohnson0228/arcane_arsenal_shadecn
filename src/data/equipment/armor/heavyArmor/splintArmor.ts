import { ArmorType } from '@/data/types/armorType'

export const splintArmor: ArmorType = {
  name: 'splint armor',
  cost: 200,
  armorClass: {
    value: 17,
    dexMod: false,
    dexMax: {
      max: true,
      value: 2,
    },
  },
  strengthReq: 15,
  stealthDisadvantage: true,
  weight: 60,
}
