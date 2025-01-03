import { tools } from '../equipment/generalEquipment'
import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const soldier: BackgroundType = {
  name: 'soldier',
  description:
    'War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.',
  startingProficiencies: {
    given: [SkillProficiencies[3], SkillProficiencies[7]],
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
    gold: 10,
    platinum: 0,
  },
  startingEquipment: {
    fixed: [
      'an ensignia of rank',
      'a trophy taken from a fallen enemy',
      'a set of common clothes',
    ],
    choices: {
      options: [tools.gamingSets[1], tools.gamingSets[2]],
      selection: 1,
    },
  },
  feature: {
    name: 'military rank',
    description: [
      'You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      "I'm always polite and respectful.",
      "I'm haunted by memories o f war. I can't get the images of violence out of my mind.",
      "I've lost too many friends, and I'm slow to make new ones.",
      "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
      'I can stare down a hell hound without flinching.',
      'I enjoy being strong and like breaking things.',
      'I have a crude sense of humor.',
      'I face problems head-on. A simple, direct solution is the best path to success',
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Greater Good. Our lot is to lay down our lives in defense of others. (Good)',
      'Responsibility. I do what I must and obey just authority. (Lawful)',
      'Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)',
      'Might. In life as in war, the stronger force wins. (Evil)',
      "Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
      'Nation. My city, nation, or people are all that matter. (Any)',
    ],
  },
  bond: {
    choose: 1,
    from: [
      'I would still lay down my life for the people I served with.',
      'Someone saved my life on the battlefield. To this day, I will never leave a friend behind.',
      'My honor is my life.',
      "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      'Those who fight beside me are those worth dying for.',
      'I fight for those who cannot fight for themselves.',
    ],
  },
  flaw: {
    choose: 1,
    from: [
      'The monstrous enemy we faced in battle still leaves me quivering with fear.',
      'I have little respect for anyone who is not a proven warrior.',
      'I made a terrible mistake in battle cost many lives— and I would do anything to keep that mistake secret.',
      'My hatred of my enemies is blind and unreasoning.',
      'I obey the law, even if the law causes misery.',
      "I'd rather eat my armor than admit when I’m wrong.",
    ],
  },
}
