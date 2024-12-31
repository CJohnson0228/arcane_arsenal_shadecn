import { battleaxe } from './melee/martial/battleAxe'
import { flail } from './melee/martial/flail'
import { glaive } from './melee/martial/glaive'
import { greataxe } from './melee/martial/greataxe'
import { greatsword } from './melee/martial/greatsword'
import { halberd } from './melee/martial/halberd'
import { lance } from './melee/martial/lance'
import { longsword } from './melee/martial/longsword'
import { maul } from './melee/martial/maul'
import { morningstar } from './melee/martial/morningstar'
import { pike } from './melee/martial/pike'
import { rapier } from './melee/martial/rapier'
import { scimitar } from './melee/martial/scimitar'
import { shortsword } from './melee/martial/shortsword'
import { trident } from './melee/martial/trident'
import { warhammer } from './melee/martial/warhammer'
import { warPick } from './melee/martial/warpick'
import { whip } from './melee/martial/whip'
import { club } from './melee/simple/club'
import { dagger } from './melee/simple/dagger'
import { greatClub } from './melee/simple/greatClub'
import { handaxe } from './melee/simple/handaxe'
import { javelin } from './melee/simple/javelin'
import { lightHammer } from './melee/simple/lightHammer'
import { mace } from './melee/simple/mace'
import { quarterstaff } from './melee/simple/quarterstaff'
import { sickle } from './melee/simple/sickle'
import { spear } from './melee/simple/spear'
import { unarmedStrike } from './melee/simple/unarmedStrike'
import { blowgun } from './ranged/martial/blowgun'
import { handCrossbow } from './ranged/martial/handCrossbow'
import { heavyCrossbow } from './ranged/martial/heavyCrossbow'
import { longbow } from './ranged/martial/longbow'
import { net } from './ranged/martial/net'
import { dart } from './ranged/simple/dart'
import { lightCrossbow } from './ranged/simple/lightCrossbow'
import { shortbow } from './ranged/simple/shortbow'
import { sling } from './ranged/simple/sling'

export const simpleMeleeWeapons = [
  club,
  dagger,
  greatClub,
  handaxe,
  javelin,
  lightHammer,
  mace,
  quarterstaff,
  sickle,
  spear,
  unarmedStrike,
]

export const simpleRangedWeapons = [dart, lightCrossbow, shortbow, sling]

export const martialMeleeWeapons = [
  battleaxe,
  flail,
  glaive,
  greataxe,
  greatsword,
  halberd,
  lance,
  longsword,
  maul,
  morningstar,
  pike,
  rapier,
  scimitar,
  shortsword,
  trident,
  warhammer,
  warPick,
  whip,
]

export const martialRangedWeapons = [
  blowgun,
  handCrossbow,
  heavyCrossbow,
  longbow,
  net,
]

export const martialWeapons = [...martialMeleeWeapons, ...martialRangedWeapons]

export const simpleWeapons = [...simpleMeleeWeapons, ...simpleRangedWeapons]

export const allWeapons = [...simpleWeapons, ...martialWeapons]
