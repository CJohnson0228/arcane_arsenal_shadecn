import { tools } from '../equipment/generalEquipment'
import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const urchin: BackgroundType = {
  name: 'urchin',
  description:
    "You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You've survived despite all odds, and did so through cunning, strength, speed, or some combination of each.",
  startingProficiencies: {
    given: [
      SkillProficiencies[15],
      SkillProficiencies[16],
      tools.thievesTools,
      tools.disguiseKit,
    ],
    select: {
      choices: 1,
      options: [],
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
    gold: 10,
    platinum: 0,
  },
  startingEquipment: {
    fixed: [
      'a small knife',
      'a map of the city you grew up in',
      'a pet mouse',
      'a token to remember your parents by',
      'a set of common clothes',
    ],
    choices: {
      options: [tools.gamingSets[1], tools.gamingSets[2]],
      selection: 1,
    },
  },
  feature: {
    name: 'city secrets',
    description: [
      'You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss.',
      'When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      'I hide scraps of food and trinkets away in my pockets.',
      'I ask a lot of questions.',
      'I like to squeeze into small places where no one else can get to me.',
      'I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.',
      'I eat like a pig and have bad manners.',
      "I think anyone who's nice to me is hiding evil intent.",
      "I don't like to bathe.",
      'I bluntly say what other people are hinting at or hiding.',
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Respect. All people, rich or poor, deserve respect. (Good)',
      'Community. We have to take care of each other, because no one else is going to do it. (Lawful)',
      'Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)',
      'Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)',
      "People. I help the people who help me— that's what keeps us alive. (Neutral)",
      "Aspiration. I'm going to prove that I'm worthy of a better life.",
    ],
  },
  bond: {
    choose: 1,
    from: [
      "My town or city is my home, and I'll fight to defend it.",
      'I sponsor an orphanage to keep others from enduring what I was forced to endure.',
      'I owe my survival to another urchin who taught me to live on the streets.',
      'I owe a debt I can never repay to the person who took pity on me.',
      "I escaped my life of poverty by robbing an important person, and I'm wanted for it.",
      "No one else should have to endure the hardships I've been through.",
    ],
  },
  flaw: {
    choose: 1,
    from: [
      "If I'm outnumbered, I will run away from a fight.",
      "Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
      'I will never fully trust anyone other than myself.',
      "I'd rather kill someone in their sleep then fight fair.",
      "It's not stealing if I need it more than someone else.",
      "People who can't take care of themselves get what they deserve.",
    ],
  },
}
