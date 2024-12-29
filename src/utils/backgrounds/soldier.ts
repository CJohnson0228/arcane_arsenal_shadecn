import { languages } from './languages'

export const soldier = {
  name: '',
  description: '',
  startingProficiencies: [],
  languageOptions: {
    choose: 2,
    from: languages,
  },
  startingEquipment: [
    {
      name: 'common cloths',
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
