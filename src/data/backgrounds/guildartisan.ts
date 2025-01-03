import { tools } from '../equipment/generalEquipment'
import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const guildartisan: BackgroundType = {
  name: 'guild artisan',
  description:
    'You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.',
  startingProficiencies: {
    given: [SkillProficiencies[6], SkillProficiencies[11]],
    select: {
      choices: 1,
      options: tools.artisanTools,
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
    gold: 15,
    platinum: 0,
  },
  startingEquipment: {
    fixed: ['letter of introduction from your guild', "traveler's clothes"],
    choices: {
      options: tools.artisanTools,
      selection: 1,
    },
  },
  feature: {
    name: 'guild membership',
    special: {
      name: 'guild business',
      choices: {
        dice: 20,
        options: [
          'Alchemists and apothecaries',
          'Armorers, locksmiths, and finesmiths',
          'Brewers, distillers, and vintners',
          'Calligraphers, scribes, and scriveners',
          'Carpenters, roofers, and plasterers',
          'Cartographers, surveyors, and chart-makers',
          'Cobblers and shoemakers',
          'Cooks and bakers',
          'Glassblowers and glaziers',
          'Jewelers and gemcutters',
          'Leatherworkers, skinners, and tanners',
          'Masons and stonecutters',
          'Painters, limners, and sign-makers',
          'Potters and tile-makers',
          'Shipwrights and sailmakers',
          'Smiths and metal-forgers',
          'Tinkers, pewterers, and casters',
          'Wagon-makers and wheelwrights',
          'Weavers and dyers',
          'Woodcarvers, coopers, and bowyers',
        ],
      },
    },
    description: [
      'As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed.',
      'In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      "I believe that anything worth doing is worth doing right. I can't help it— I'm a perfectionist.",
      "I'm a snob who looks down on those who can't appreciate fine art.",
      'I always want to know how things work and what makes people tick.',
      "I'm full of witty aphorisms and have a proverb for every occasion.",
      "I'm rude to people who lack my commitment to hard work and fair play.",
      "I like to talk at length about my profession. 7 I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
      "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)',
      'Generosity. My talents were given to me so that I could use them to benefit the world. (Good)',
      'Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)',
      'Greed. I’m only in it for the money. (Evil)',
      'People. I’m committed to the people I care about, not to ideals. (Neutral)',
      'Aspiration. I work hard to be the best there is at my craft.',
    ],
  },
  bond: {
    choose: 1,
    from: [
      'The workshop where I learned my trade is the most important place in the world to me.',
      "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
      'I owe my guild a great debt for forging me into the person I am today.',
      "I pursue wealth to secure someone's love.",
      'One day I will return to my guild and prove that I am the greatest artisan of them all.',
      'I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.',
    ],
  },
  flaw: {
    choose: 1,
    from: [
      "I'll do anything to get my hands on something rare or priceless.",
      "I'm quick to assume that someone is trying to cheat me.",
      'No one must ever learn that I once stole money from guild coffers.',
      "I'm never satisfied with what I have— I always want more.",
      'I would kill to acquire a noble title.',
      "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
    ],
  },
}
