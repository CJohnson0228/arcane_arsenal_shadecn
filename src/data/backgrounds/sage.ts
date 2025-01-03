import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const sage: BackgroundType = {
  name: 'sage',
  description:
    'You spent years learning the lore o f the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.',
  startingProficiencies: {
    given: [SkillProficiencies[2], SkillProficiencies[5]],
    select: {
      choices: 0,
      options: [],
    },
  },
  languageOptions: {
    choose: 2,
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
      'a bottle of ink',
      'a quill',
      'a small knife',
      'a letter from a dead colleague posing a question you have not been able to answer',
      'a set of common clothes',
    ],
    choices: {
      options: [],
      selection: 0,
    },
  },
  feature: {
    name: 'researcher',
    special: {
      name: 'specialty',
      choices: {
        dice: 8,
        options: [
          'Alchemist',
          'Astronomer',
          'Discredited academic',
          'Librarian ',
          'Professor ',
          'Researcher',
          'Wizard’s apprentice',
          'Scribe',
        ],
      },
    },
    description: [
      'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature.',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      'I use polysyllabic words that convey the impression of great erudition.',
      "I've read every book in the world's greatest libraries— or I like to boast that I have.",
      "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
      "There's nothing I like more than a good mystery.",
      "I'm willing to listen to every side of an argument before I make my own judgment.",
      'I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost . . . everyone . . . is . . . compared . . . to me.',
      'I am horribly, horribly awkward in social situations.',
      "I'm convinced that people are always trying to steal my secrets.",
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Knowledge. The path to power and self-improvement is through knowledge. (Neutral)',
      'Beauty. What is beautiful points us beyond itself toward what is true. (Good)',
      'Logic. Emotions must not cloud our logical thinking. (Lawful)',
      'No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)',
      'Power. Knowledge is the path to power and domination. (Evil)',
      'Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)',
    ],
  },
  bond: {
    choose: 1,
    from: [
      'It is my duty to protect my students.',
      'I have an ancient text that holds terrible secrets that must not fall into the wrong hands.',
      'I work to preserve a library, university, scriptorium, or monastery.',
      'My life’s work is a series of tomes related to a specific field of lore.',
      "I've been searching my whole life for the answer to a certain question.",
      'I sold my soul for knowledge. I hope to do great deeds and win it back.',
    ],
  },
  flaw: {
    choose: 1,
    from: [
      'I am easily distracted by the promise of information.',
      'Most people scream and run when they see a demon. I stop and take notes on its anatomy.',
      'Unlocking an ancient mystery is worth the price of a civilization.',
      'I overlook obvious solutions in favor of complicated ones.',
      'I speak without really thinking through my words, invariably insulting others.',
      "I can't keep a secret to save my life, or anyone else's.",
    ],
  },
}
