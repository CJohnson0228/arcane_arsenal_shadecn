import { tools } from '../equipment/generalEquipment'
import { languages } from '../misc/languages'
import { BackgroundType } from './_Backgrounds'

export const entertainer: BackgroundType = {
  name: 'entertainer',
  description:
    'You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.',
  startingProficiencies: {
    given: [tools.disguiseKit],
    select: {
      choices: 1,
      options: tools.musicalInstruments,
    },
  },
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
  startingEquipment: {
    fixed: ['the favor of an admirer', 'costume'],
    choices: {
      options: tools.musicalInstruments,
      selection: 1,
    },
  },
  feature: {
    name: 'by popular demand',
    special: {
      name: 'entertainer routines',
      choices: {
        dice: 10,
        options: [
          'actor',
          'dancer',
          'fire-eater',
          'jester',
          'juggler',
          'intrumentalist',
          'poet',
          'singer',
          'storyteller',
          'tumbler',
        ],
      },
    },
    description: [
      "You can always find a place to perform , usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a m odest or com fortable standard (depending on the quality of the establishment), as long as you perform each night.",
      'In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      'I know a story relevant to almost every situation.',
      'Whenever I come to a new place, I collect local rumors and spread gossip.',
      'I\'m a hopeless romantic, always searching for that "special someone".',
      'Nobody stays angry at me or around me for long, since I can defuse any amount of tension.',
      'I love a good insult, even one directed at me.',
      "I get bitter if I'm not the center of attention.",
      "I'll settle for nothing less than perfection.",
      'I change my mood or my mind as quickly as I change key in a song.',
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Beauty. When I perform, I make the world better than it was. (Good)',
      'Tradition. The stories, legends, and songs of the past must never be forgotten. (Lawful)',
      'Creativity. The world is in need of new ideas and bold action. (Chaotic)',
      "Greed. I'm only in it for the money and fame. (Evil)",
      "People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
      'Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)',
    ],
  },
  bond: {
    choose: 1,
    from: [
      'My instrument is my most treasured possession, and it reminds me of someone I love.',
      "Someone stole my precious instrument, and someday I'll get it back.",
      'I want to be famous, whatever it takes.',
      "I idolize a hero of the old tales and measure my deeds against that person's.",
      'I will do anything to prove myself superior to me hated rival.',
      'I would do anything for the other members of my old troupe.',
    ],
  },
  flaw: {
    choose: 1,
    from: [
      "I'll do anything to win fame and renown.",
      "I'm a sucker for a pretty face.",
      'A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.',
      'I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.',
      'I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.',
      'Despite my best efforts, I am unreliable to my friends.',
    ],
  },
}
