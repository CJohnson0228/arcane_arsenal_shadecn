import { allWeaponsType } from '../types/weaponTypes'

export const basicWeapons = {
  simpleMeleeWeapons: [
    'club',
    'dagger',
    'greatclub',
    'handaxe',
    'javelin',
    'light hammer',
    'mace',
    'quarterstaff',
    'sickle',
    'spear',
    'unarmed strike',
  ] as const,
  simpleRangedWeapons: ['light crossbow', 'dart', 'shortbow', 'sling'] as const,
  martialMeleeWeapons: [
    'battleaxe',
    'flail',
    'glaive',
    'greataxe',
    'greatsword',
    'halberd',
    'lance',
    'longsword',
    'maul',
    'morningstar',
    'pike',
    'rapier',
    'scimitar',
    'shortsword',
    'trident',
    'war pick',
    'warhammer',
    'whip',
  ] as const,
  martialRangedWeapons: [
    'blowgun',
    'hand crossbow',
    'heavy crossbow',
    'longbow',
    'net',
  ] as const,
}

export const allBasicWeapons: allWeaponsType[] = [
  ...basicWeapons.simpleMeleeWeapons,
  ...basicWeapons.simpleRangedWeapons,
  ...basicWeapons.martialMeleeWeapons,
  ...basicWeapons.martialRangedWeapons,
]
