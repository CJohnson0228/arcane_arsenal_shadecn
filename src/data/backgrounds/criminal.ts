import { tools } from '../equipment/generalEquipment'
import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const criminal: BackgroundType = {
  name: 'crminal',
  description:
    "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
  startingProficiencies: {
    given: [SkillProficiencies[4], SkillProficiencies[16], tools.thievesTools],
    select: {
      choices: 1,
      options: tools.gamingSets,
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
    fixed: ['a crowbar', 'set of dark common clothes with a hood'],
    choices: {
      options: [],
      selection: 0,
    },
  },
  feature: {
    name: 'criminal contact',
    special: {
      name: 'criminal specialty',
      choices: {
        dice: 8,
        options: [
          'blackmailer',
          'burglar',
          'enforcer',
          'fence',
          'highway robber',
          'hired killer',
          'pickpocket',
          'smuggler',
        ],
      },
    },
    description: [
      'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals.',
      'You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters,',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      'I always have plan for what to do when things go wrong.',
      'I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.',
      'The first thing I do in a new place is note the locations of everything valuable--or where such things could be hidden.',
      'I would rather make a new friend than a new enemy.',
      'I am incredibly slow to trust. Those who seem the fairest often have the most to hide.',
      "I don't pay attention to the risks in a situation. Never tell me the odds.",
      "The best way to get me to do something is to tell me I can't do it.",
      'I blow up at the slightest insult.',
    ],
  },
  ideal: {
    choose: 1,
    from: [
      "Honor. I don't steal from others in the trade. (Lawful)",
      'Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)',
      'Charity. I steal from the wealthy so that I can help people in need. (Good)',
      'Greed. I will do whatever it takes to become wealthy. (Evil)',
      "People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
      "Redemption. There's a spark of good in everyone. (Good)",
    ],
  },
  bond: {
    choose: 1,
    from: [
      "I'm trying to pay off an old debt I owe to a generous benefactor.",
      'My ill-gotten gains go to support my family.',
      'Something important was taken from me, and I aim to steal it back.',
      'I will become the greatest thief that ever lived.',
      "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
      'Someone I loved died because of a mistake I made. That will never happen again.',
    ],
  },
  flaw: {
    choose: 1,
    from: [
      "When I see something valuable, I can't think about anything but how to steal it.",
      'When faced with a choice between money and my friends, I usually choose the money.',
      "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
      'I have a "tell" that reveals when I\'m lying.',
      'I turn tail and run when things go bad.',
      "An innocent person is in prison for a crime that I committed. I'm okay with that.",
    ],
  },
}
