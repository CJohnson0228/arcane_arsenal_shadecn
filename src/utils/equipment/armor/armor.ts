import { allArmorType } from '../types/armorTypes'

export const heavyArmor = [
  'ring mail',
  'chain mail',
  'splint',
  'plate',
] as const

export const mediumArmor = [
  'hide',
  'chain shirt',
  'scale mail',
  'breastplate',
  'half plate',
] as const

export const lightArmor = ['padded', 'leather', 'studded leather'] as const

export const shields = ['shield'] as const

export const allBasicArmor: allArmorType[] = [
  ...heavyArmor,
  ...mediumArmor,
  ...lightArmor,
  ...shields,
]
