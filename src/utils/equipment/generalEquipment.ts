import { toolType } from './types/equipmentTypes'

export const artisanTools: toolType[] = [
  {
    item: 'Alchemist’s supplies',
    cost: 50,
    weight: 8,
  },
  {
    item: 'Brewer’s supplies',
    cost: 20,
    weight: 9,
  },
  {
    item: 'Calligrapher’s supplies',
    cost: 10,
    weight: 5,
  },
  {
    item: 'Carpenter’s tools',
    cost: 8,
    weight: 6,
  },
  {
    item: 'Cartographer’s tools',
    cost: 15,
    weight: 6,
  },
  {
    item: 'Cobbler’s tools',
    cost: 5,
    weight: 5,
  },
  {
    item: 'Cook’s utensils',
    cost: 1,
    weight: 8,
  },
  {
    item: 'Glassblower’s tools',
    cost: 30,
    weight: 5,
  },
  {
    item: 'Jeweler’s tools',
    cost: 25,
    weight: 2,
  },
  {
    item: 'Leatherworker’s tools',
    cost: 5,
    weight: 5,
  },
  {
    item: 'Mason’s tools',
    cost: 10,
    weight: 8,
  },
  {
    item: 'Painter’s supplies',
    cost: 10,
    weight: 5,
  },
  {
    item: 'Potter’s tools',
    cost: 10,
    weight: 3,
  },
  {
    item: 'Smith’s tools',
    cost: 20,
    weight: 8,
  },
  {
    item: 'Tinker’s tools',
    cost: 50,
    weight: 10,
  },
  {
    item: 'Weaver’s tools',
    cost: 1,
    weight: 5,
  },
  {
    item: 'Woodcarver’s tools',
    cost: 1,
    weight: 5,
  },
]

export const gamingSets: toolType[] = [
  {
    item: 'Dice set',
    cost: 1,
    weight: 0,
  },
  {
    item: 'Dragonchess set',
    cost: 1,
    weight: 0,
  },
  {
    item: 'Playing card set',
    cost: 5,
    weight: 0,
  },
  {
    item: 'Three-Dragon Ante set',
    cost: 1,
    weight: 0,
  },
]

export const musicalInstruments: toolType[] = [
  {
    item: 'Bagpipes',
    cost: 30,
    weight: 6,
  },
  {
    item: 'Drum',
    cost: 6,
    weight: 3,
  },
  {
    item: 'Dulcimer',
    cost: 25,
    weight: 10,
  },
  {
    item: 'Flute',
    cost: 2,
    weight: 1,
  },
  {
    item: 'Lute',
    cost: 35,
    weight: 2,
  },
  {
    item: 'Lyre',
    cost: 30,
    weight: 2,
  },
  {
    item: 'Horn',
    cost: 3,
    weight: 2,
  },
  {
    item: 'Pan flute',
    cost: 12,
    weight: 2,
  },
  {
    item: 'Shawm',
    cost: 2,
    weight: 1,
  },
  {
    item: 'Viol',
    cost: 30,
    weight: 1,
  },
]

export const tools = {
  artisanTools,
  gamingSets,
  musicalInstruments,
  tinkerTools: {
    item: 'Tinker’s tools',
    cost: 50,
    weight: 10,
  },
  disguiseKit: {
    item: 'Disguise kit',
    cost: 25,
    weight: 3,
  },
  forgeryKit: {
    item: 'Forgery kit',
    cost: 15,
    weight: 5,
  },
  herbalismKit: {
    item: 'Herbalism kit',
    cost: 5,
    weight: 3,
  },
  navigatorTools: {
    item: 'Navigator’s tools',
    cost: 25,
    weight: 2,
  },
  poisonerKit: {
    item: 'Poisoner’s kit',
    cost: 50,
    weight: 2,
  },
  thievesTools: {
    item: 'Thieves’ tools',
    cost: 25,
    weight: 1,
  },
}
