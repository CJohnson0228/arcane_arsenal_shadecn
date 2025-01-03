import { tools } from '../equipment/generalEquipment'
import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const charlatan: BackgroundType = {
  name: 'charlatan',
  description:
    "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It's a useful talent, and one that you're perfectly willing to use for your advantage.",
  startingProficiencies: {
    given: [
      SkillProficiencies[4],
      SkillProficiencies[15],
      SkillProficiencies[16],
      tools.disguiseKit,
      tools.forgeryKit,
    ],
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
    fixed: ['fine clothes', 'tools of your con choice', tools.disguiseKit],
    choices: {
      options: [],
      selection: 0,
    },
  },
  feature: {
    name: 'False Identity',
    special: {
      name: 'Favorite Scheme',
      choices: {
        dice: 6,
        options: [
          'I cheat at games of chance.',
          'I shave coins or forge documents',
          "I insinuate myself into people's lives to prey on their weakness and secure their fortunes",
          'I put on new identities like clothes',
          'I run sleight of hand cons on street corners',
          'I convine people that worthless junk is worth their hard-earned money',
        ],
      },
    },
    description: [
      'You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. ',
      'Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      'I fall in and out of love easily, and am always pursuing someone.',
      'I have a joke for every occasion, especially occasions where humor is inappropriate.',
      'Flattery is my preferred trick for getting what I want.',
      "I'm a born gambler who can't resist taking a risk for a potential payoff.",
      "I lie about almost everything, even when there's no good reason to.",
      'Sarcasm and insults are my weapons of choice.',
      'I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.',
      'I pocket anything I see that might have some value.',
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Independence. I am a free spirit--no one tells me what to do. (Chaotic)',
      "Fairness. I never target people who can't afford to lose a few coins. (Lawful)",
      'Charity. I distribute money I acquire to the people who really need it. (Good)',
      'Creativity. I never run the same con twice. (Chaotic)',
      'Friendship. Material goods come and go. Bonds of friendship last forever. (Good)',
      "Aspiration. I'm determined to make something of myself. (Any)",
    ],
  },
  bond: {
    choose: 1,
    from: [
      'I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.',
      "I owe everything to my mentor--a horrible person who's probably rotting in jail somewhere.",
      "Somewhere out there I have a child who doesn't know me. I'm making the world better for him or her.",
      "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
      "A powerful person killed someone I love. Some day soon, I'll have my revenge.",
      "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.",
    ],
  },
  flaw: {
    choose: 1,
    from: [
      "I can't resist a pretty face.",
      "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
      "I'm convinced that no one could ever fool me in the way I fool others.",
      "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
      "I can't resist swindling people who are more powerful than me.",
      "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
    ],
  },
}
