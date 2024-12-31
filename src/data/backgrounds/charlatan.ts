import { languages } from './languages'

export const charlatan = {
  name: 'charlatan',
  description:
    "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It's a useful talent, and one that you're perfectly willing to use for your advantage.",
  startingProficiencies: [
    'deception',
    'sleight of hand',
    'disguise kit',
    'forgery kit',
  ],
  languageOptions: {
    choose: 0,
    from: languages,
  },
  startingCoin: {
    copper: 0,
    silver: 0,
    electrum: 0,
    gold: 15,
    platinum: 0,
  },
  startingEquipment: [
    {
      name: 'fine cloths',
      quantity: 1,
    },
  ],
  startingEquipmentOptions: [
    {
      choose: 1,
      type: 'equipment',
      from: [],
    },
  ],
  feature: {
    name: '',
    description: ['', ''],
  },
  personailityTraits: {
    choose: 1,
    from: ['', '', '', '', '', '', '', ''],
  },
  ideal: {
    choose: 1,
    from: ['', '', '', '', '', ''],
  },
  bond: {
    choose: 1,
    from: ['', '', '', '', '', ''],
  },
  flaw: {
    choose: 1,
    from: ['', '', '', '', '', ''],
  },
}
