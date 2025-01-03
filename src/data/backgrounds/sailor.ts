import { tools } from '../equipment/generalEquipment'
import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const sailor: BackgroundType = {
  name: 'sailor',
  description:
    'You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottom less depths. Your first love is the distant line of the horizon, but the time has come to try your hand at som ething new.',
  startingProficiencies: {
    given: [
      SkillProficiencies[3],
      SkillProficiencies[11],
      tools.navigatorTools,
    ],
    select: {
      choices: 0,
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
      'a belaying pin (club)',
      '50 feet of silk rope',
      'a lucky charm',
      'a set of common clothes',
    ],
    choices: {
      options: [],
      selection: 0,
    },
  },
  feature: {
    name: "ship's passage",
    description: [
      "When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need.",
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      'My friends know they can rely on me, no matter what.',
      'I work hard so that I can play hard when the work is done.',
      'I enjoy sailing into new ports and making new friends over a flagon of ale.',
      'I stretch the truth for the sake of a good story.',
      'To me, a tavern brawl is a nice way to get to know a new city.',
      'I never pass up a friendly wager.',
      'My language is as foul as an otyugh nest.',
      'I like a job well done, especially if I can convince someone else to do it.',
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)',
      'Fairness. We all do the work, so we all share in the rewards. (Lawful)',
      'Freedom. The sea is freedom— the freedom to go anywhere and do anything. (Chaotic)',
      "Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)",
      "People. I'm committed to my crewmates, not to ideals. (Neutral)",
      "Aspiration. Someday I'll own my own ship and chart my own destiny. (Any)",
    ],
  },
  bond: {
    choose: 1,
    from: [
      "I'm loyal to my captain first, everything else second.",
      'The ship is most important— crewmates and captains come and go.',
      "I'll always remember my first ship.",
      'In a harbor town, I have a paramour whose eyes nearly stole me from the sea.',
      'I was cheated out of my fair share of the profits, and I want to get my due.',
      'Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.',
    ],
  },
  flaw: {
    choose: 1,
    from: [
      "I follow orders, even if I think they're wrong.",
      "I'll say anything to avoid having to do extra work.",
      'Once someone questions my courage, I never back down no matter how dangerous the situation.',
      "Once I start drinking, it's hard for me to stop.",
      "I can't help but pocket loose coins and other trinkets I come across.",
      'My pride will probably lead to my destruction.',
    ],
  },
}
