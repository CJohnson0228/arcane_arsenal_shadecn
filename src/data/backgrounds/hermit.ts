import { tools } from '../equipment/generalEquipment'
import { languages } from '../misc/languages'
import { SkillProficiencies } from '../proficiencies/skillProficiencies'
import { BackgroundType } from './_Backgrounds'

export const hermit: BackgroundType = {
  name: 'hermit',
  description:
    'You lived in seclusion—either in a sheltered community such as a monastery, or entirely alone—for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.',
  startingProficiencies: {
    given: [SkillProficiencies[9], SkillProficiencies[14], tools.herbalismKit],
    select: {
      choices: 1,
      options: [],
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
    gold: 5,
    platinum: 0,
  },
  startingEquipment: {
    fixed: [
      'a scroll case stuffed full of notes from your studies or prayers',
      'a winter blanket',
      'set of common clothes',
      tools.herbalismKit,
    ],
    choices: {
      options: [],
      selection: 0,
    },
  },
  feature: {
    name: 'discovery',
    special: {
      name: 'life of seclusion',
      choices: {
        dice: 8,
        options: [
          'I was searching for spiritual enlightenment.',
          'I was partaking of communal living in accordance with the dictates of a religious order.',
          'I was exiled for a crime I didn’t commit.',
          'I retreated from society after a life-altering event. I needed a quiet place to work on my art, literature, music, or manifesto.',
          'I needed to commune with nature, far from civilization.',
          'I was the caretaker of an ancient ruin or relic.',
          'I was a pilgrim in search of a person, place, or relic of spiritual significance.',
        ],
      },
    },
    description: [
      'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society.',
    ],
  },
  personailityTraits: {
    choose: 1,
    from: [
      "I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
      'I am utterly serene, even in the face of disaster.',
      'The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.',
      'I feel tremendous empathy for all who suffer.',
      "I'm oblivious to etiquette and social expectations.",
      'I connect everything that happens to me to a grand, cosmic plan.',
      'I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.',
      'I am working on a grand philosophical theory and love sharing my ideas.',
    ],
  },
  ideal: {
    choose: 1,
    from: [
      'Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)',
      'Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)',
      'Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)',
      'Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)',
      'Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)',
      'Self-Knowledge. If you know yourself, there’s nothing left to know. (Any)',
    ],
  },
  bond: {
    choose: 1,
    from: [
      'Nothing is more important than the other members of my hermitage, order, or association.',
      'I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.',
      "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
      'I entered seclusion because I loved someone I could not have.',
      'Should my discovery come to light, it could bring ruin to the world.',
      'My isolation gave me great insight into a great evil that only I can destroy.',
    ],
  },
  flaw: {
    choose: 1,
    from: [
      "Now that I've returned to the world, I enjoy its delights a little too much.",
      'I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.',
      'I am dogmatic in my thoughts and philosophy.',
      'I let my need to win arguments overshadow friendships and harmony.',
      "I'd risk too much to uncover a lost bit of knowledge.",
      "I like keeping secrets and won't share them with anyone.",
    ],
  },
}
