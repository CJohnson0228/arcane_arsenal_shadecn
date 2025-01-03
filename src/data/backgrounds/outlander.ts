import { tools } from '../equipment/generalEquipment'
import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const outlander: BackgroundType = {
  name: 'outlander',
  description:
    "You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don't know the specific features of the terrain, you know the ways of the wild.",
  startingProficiencies: {
    given: [SkillProficiencies[3], SkillProficiencies[17]],
    select: {
      choices: 1,
      options: tools.musicalInstruments,
    },
  },
  languageOptions: {
    choose: 1,
    from: languages,
  },
  startingCoin: {
    copper: 0,
    silver: 0,
    electrum: 0,
    gold: 10,
    platinum: 0,
  },
  startingEquipment: {
    fixed: [
      'a staff',
      'a hunting trap',
      'a trophy from animal you killed',
      "a set of traveler's clothes",
    ],
    choices: {
      options: [],
      selection: 0,
    },
  },
  feature: {
    name: 'wanderer',
    special: {
      name: 'origin',
      choices: {
        dice: 10,
        options: [
          'forester ',
          'trapper',
          'homesteader',
          'guide',
          'exile ',
          'bounty hunter ',
          'pilgrim ',
          'tribal nomad ',
          'hunter-gatherer or outcast ',
          'tribal marauder',
        ],
      },
    },
    description: [
      'You have an excellent m em ory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you.',
      'In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      "I'm driven by a wanderlust that led me away from home.",
      'I watch over my friends as if they were a litter of newborn pups.',
      "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
      'I have a lesson for every situation, drawn from observing nature.',
      "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
      "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
      'I feel far more comfortable around animals than people.',
      'I was, in fact, raised by wolves.',
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)',
      'Greater Good. It is each person’s responsibility to make the most happiness for the whole tribe. (Good)',
      'Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)',
      'Might. The strongest are meant to rule. (Evil)',
      'Nature. The natural world is more important than all the constructs of civilization. (Neutral)',
      'Glory. I must earn glory in battle, for myself and my clan. (Any)',
    ],
  },
  bond: {
    choose: 1,
    from: [
      'My family, clan, or tribe is the most important thing in my life, even when they are far from me.',
      'An injury to the unspoiled wilderness of my home is an injury to me.',
      'I will bring terrible wrath down on the evildoers who destroyed my homeland.',
      'I am the last of my tribe, and it is up to me to ensure their names enter legend.',
      'I suffer awful visions of a coming disaster and will do anything to prevent it.',
      'It is my duty to provide children to sustain my tribe.',
    ],
  },
  flaw: {
    choose: 1,
    from: [
      'I am too enamored of ale, wine, and other intoxicants.',
      "There's no room for caution in a life lived to the fullest.",
      "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
      'I am slow to trust members of other races, tribes, and societies.',
      'Violence is my answer to almost any challenge.',
      "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.",
    ],
  },
}
