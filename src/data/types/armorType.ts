export type ArmorType = {
  name: string
  cost: number
  armorClass: {
    value: number
    dexMod: boolean
    dexMax: {
      max: boolean
      value: number
    }
  }
  strengthReq: number
  stealthDisadvantage: boolean
  weight: number
}
