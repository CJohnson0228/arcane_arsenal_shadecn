import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const acolyte: BackgroundType = {
  name: 'acolyte',
  description:
    'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric - performing sacred rites is not the same thing as channeling divine power.',
  startingProficiencies: {
    given: [SkillProficiencies[6], SkillProficiencies[14]],
  },
  languageOptions: {
    choose: 2,
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
    fixed: ['common clothes'],
    choices: {
      options: ['amulet', 'emblem', 'reliquary'],
      selection: 1,
    },
  },
  feature: {
    name: 'shelter of faith',
    description: [
      'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.',
      'You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      "I idolize a particular hero of my faith and constantly refer to that person's deeds and example.",
      'I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.',
      'I see omens in every event and action. The gods try to speak to us, we just need to listen.',
      'Nothing can shake my optimistic attitude.',
      'I quote (or misquote) the sacred texts and proverbs in almost every situation.',
      'I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.',
      "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
      "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.",
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)',
      'Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)',
      'Charity. I always try to help those in need, no matter what the personal cost. (Good)',
      'Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)',
      "Power. I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)",
      "Aspiration. I seek to prove my self worthy of my god's favor by matching my actions against his or her teachings. (Any)",
    ],
  },
  bond: {
    choose: 1,
    from: [
      'I would die to recover an ancient artifact of my faith that was lost long ago.',
      'I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.',
      'I owe me life to the priest who took me in when my parents died.',
      'Everything I do is for the common people.',
      'I will do anything to protect the temple where I served.',
      'I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.',
    ],
  },
  flaw: {
    choose: 1,
    from: [
      'I judge others harshly, and myself even more severely.',
      "I put too much trust in those who wield power within my temple's hierarchy.",
      'My piety sometimes leads me to blindly trust those that profess faith in my god.',
      'I am inflexible in my thinking.',
      'I am suspicious of strangers and suspect the worst of them.',
      'Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.',
    ],
  },
}
