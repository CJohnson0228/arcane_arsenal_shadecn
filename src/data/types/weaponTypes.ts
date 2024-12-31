export type WeaponType = {
  name: string
  cost: number
  damage: {
    diceNumber: number
    diceSides: number
    damageType: string
  }
  weight: number
  properties: string[] | string | undefined
}
