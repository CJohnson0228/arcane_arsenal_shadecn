import { tools } from '../equipment/generalEquipment'
import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const noble: BackgroundType = {
  name: 'noble',
  description:
    'You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.',
  startingProficiencies: {
    given: [SkillProficiencies[5], SkillProficiencies[13]],
    select: {
      choices: 1,
      options: tools.gamingSets,
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
    gold: 25,
    platinum: 0,
  },
  startingEquipment: {
    fixed: ['set of fine clothes', 'a signet ring', 'a scroll of pedigree'],
    choices: {
      options: [],
      selection: 0,
    },
  },
  feature: {
    name: 'position of priviledge',
    special: {
      name: '',
      choices: {
        dice: 10,
        options: [],
      },
    },
    description: [
      'Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are.',
      'The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      'My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.',
      'The common folk love me for my kindness and generosity.',
      'No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.',
      'I take great pains to always look my best and follow the latest fashions.',
      "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
      'Despite my noble birth, I do not place myself above other folk. We all have the same blood.',
      'My favor, once lost, is lost forever.',
      'If you do me an injury, I will crush you, ruin your name, and salt your fields.',
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)',
      'Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)',
      'Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)',
      'Power. If I can attain more power, no one will tell me what to do. (Evil)',
      'Family. Blood runs thicker than water. (Any)',
      'Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)',
    ],
  },
  bond: {
    choose: 1,
    from: [
      'I will face any challenge to win the approval of my family.',
      "My house's alliance with another noble family must be sustained at all costs.",
      'Nothing is more important than the other members of my family.',
      'I am in love with the heir of a family that my family despises.',
      'My loyalty to my sovereign is unwavering.',
      'The common folk must see me as a hero o f the people.',
    ],
  },
  flaw: {
    choose: 1,
    from: [
      'I secretly believe that everyone is beneath me.',
      'I hide a truly scandalous secret that could ruin my family forever.',
      "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
      'I have an insatiable desire for carnal pleasures.',
      'In fact, the world does revolve around me.',
      'By my words and actions, I often bring shame to my family.',
    ],
  },
}
