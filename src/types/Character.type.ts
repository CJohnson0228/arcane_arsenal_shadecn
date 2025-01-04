export interface SaveAndAbilityCheckType {
  proficient: boolean
  value: number
}

export interface PreparedSpellsType {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  name: string
  castingTime: number
  range: number
  concentration: boolean
  ritual: boolean
  requireMaterial: boolean
  notes: string[]
}

export interface WeaponOrCantripType {
  name: string
  attackBonus?: number
  difficultyClass?: number
  damage: {
    diceNumber: number
    diceSides: number
    type:
      | 'acid'
      | 'bludgeoning'
      | 'cold'
      | 'fire'
      | 'force'
      | 'lightning'
      | 'necrotic'
      | 'piercing'
      | 'poison'
      | 'psychic'
      | 'radiant'
      | 'slashing'
      | 'thunder'
  }
}

export interface CharacterType {
  characterID: string
  playerID: string
  characterName: string
  avatarurl: string | undefined
  advancementType: 'milestone' | 'experience'
  hitpointAdvance: 'fixed' | 'manual'
  encumbranceRule: 'standard' | 'variant' | 'disabled'
  encumbranceIgnoreCoins: boolean
  abilityScoreDisplay: 'modifier' | 'score'
  background?:
    | undefined
    | 'acolyte'
    | 'artisan'
    | 'charlatan'
    | 'criminal'
    | 'entertainer'
    | 'farmer'
    | 'guard'
    | 'guide'
    | 'hermit'
    | 'merchant'
    | 'noble'
    | 'sage'
    | 'sailor'
    | 'scribe'
    | 'soldier'
    | 'wayfarer'
  gender: 'm' | 'f' | undefined
  mainClass:
    | undefined
    | 'artificer'
    | 'barbarian'
    | 'bard'
    | 'cleric'
    | 'druid'
    | 'fighter'
    | 'monk'
    | 'paladin'
    | 'ranger'
    | 'rogue'
    | 'sorcerer'
    | 'warlock'
    | 'wizard'
  subClass:
    | undefined
    | 'alchemist'
    | 'artillerist'
    | 'battle smith'
    | 'path of the berserker'
    | 'path of the totem warrior'
    | 'path of the ancestral guardian'
    | 'path of the storm herald'
    | 'path of the zealot'
    | 'college of lore'
    | 'college of valor'
    | 'college of glamour'
    | 'college of swords'
    | 'college of whispers'
    | 'college of eloquence'
    | 'college of creation'
    | 'knowledge domain'
    | 'life domain'
    | 'light domain'
    | 'nature domain'
    | 'tempest domain'
    | 'trickery domain'
    | 'war domain'
    | 'forge domain'
    | 'grave domain'
    | 'order domain'
    | 'peace domain'
    | 'twilight domain'
    | 'circle of the land'
    | 'circle of the moon'
    | 'circle of dreams'
    | 'circle of the shepherd'
    | 'circle of spores'
    | 'circle of wildfire'
    | 'circle of stars'
    | 'champion'
    | 'battlemaster'
    | 'eldritch knight'
    | 'psi warrior'
    | 'rune knight'
    | 'samurai'
    | 'arcane archer'
    | 'cavalier'
    | 'way of the open hand'
    | 'way of the shadow'
    | 'way of the four elements'
    | 'way of the drunken master'
    | 'way of the kensei'
    | 'way of the sun soul'
    | 'way of mercy'
    | 'way of the astral self'
    | 'oath of devotion'
    | 'oath of the ancients'
    | 'oath of vengeance'
    | 'oath of conquest'
    | 'oath of redemption'
    | 'oath of glory'
    | 'oath of the watchers'
    | 'beast master'
    | 'hunter'
    | 'gloom stalker'
    | 'horizon walker'
    | 'monster slayer'
    | 'swarmkeeper'
    | 'fey wanderer'
    | 'arcane trickster'
    | 'thief'
    | 'assassin'
    | 'inquisitive'
    | 'mastermind'
    | 'scout'
    | 'swashbuckler'
    | 'phantom'
    | 'soulknife'
    | 'draconic bloodline'
    | 'wild magic'
    | 'storm sorcery'
    | 'divine soul'
    | 'shadow magic'
    | 'clockwork soul'
    | 'aberrant mind'
    | 'the archfey'
    | 'the fiend'
    | 'the great old one'
    | 'the celestial'
    | 'the hexblade'
    | 'the fathomless'
    | 'the genie'
    | 'abjuration'
    | 'conjuration'
    | 'divination'
    | 'enchantment'
    | 'evocation'
    | 'illusion'
    | 'necromancy'
    | 'transmutation'
    | 'war magic'
    | 'bladesinging'
    | 'order of scribes'
  species:
    | 'Aasimar'
    | 'Dragonborn'
    | 'Dwarf'
    | 'Elf'
    | 'Half-Elf'
    | 'Gnome'
    | 'Goliath'
    | 'Halfling'
    | 'Human'
    | 'Half-Orc'
    | 'Tiefling'
  subSpecies: string | undefined
  appearance: string
  backstory: string
  personality: string
  alignment:
    | 'lawful-good'
    | 'lawful-neutral'
    | 'lawful-evil'
    | 'neutral-good'
    | 'true neutral'
    | 'neutral-evil'
    | 'chaotic-good'
    | 'chaotic-neutral'
    | 'chaotic-evil'
  level:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
  experience?: number | undefined
  armorClass: number
  shield: boolean
  hitpoints: {
    current: number
    temp: number
    max: number
    hitDice: {
      spent: number
      max: number
      sides: 6 | 8 | 10 | 12
    }
    deathSaves: {
      successes: 0 | 1 | 2 | 3
      failures: 0 | 1 | 2 | 3
    }
  }
  languages:
    | 'Common'
    | 'Common Sign Language'
    | 'Draconic'
    | 'Dwarvish'
    | 'Elvish'
    | 'Giant'
    | 'Gnomish'
    | 'Goblin'
    | 'Halfling'
    | 'Orc'
  equipment: string | string[]
  coin: {
    copper: number
    silver: number
    electrum: number
    gold: number
    platinum: number
  }
  proficiencyBonus: number
  heroicInspiration: number
  initiative: number
  speed: number
  size: 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gargantuan'
  passivePerception: number
  attributes: {
    strength: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
      athletics: SaveAndAbilityCheckType
    }
    dexterity: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
      acrobatics: SaveAndAbilityCheckType
      sleightOfHand: SaveAndAbilityCheckType
      stealth: SaveAndAbilityCheckType
    }
    constitution: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
    }
    intelligence: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
      arcane: SaveAndAbilityCheckType
      history: SaveAndAbilityCheckType
      investigation: SaveAndAbilityCheckType
      nature: SaveAndAbilityCheckType
      religion: SaveAndAbilityCheckType
    }
    wisdom: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
      animalHandling: SaveAndAbilityCheckType
      insight: SaveAndAbilityCheckType
      medicine: SaveAndAbilityCheckType
      perception: SaveAndAbilityCheckType
      survival: SaveAndAbilityCheckType
    }
    charisma: {
      modifier: number
      score: number
      savingThrow: SaveAndAbilityCheckType
      deception: SaveAndAbilityCheckType
      intimidation: SaveAndAbilityCheckType
      performance: SaveAndAbilityCheckType
      persuasion: SaveAndAbilityCheckType
    }
  }
  weaponsAndCantrips?: WeaponOrCantripType[] | undefined
  classFeatures?: string[] | undefined
  specialTraits?: string[] | undefined
  feats?: string[] | undefined
  spellcasting: {
    ability: 'intelligence' | 'wisdom' | 'charisma' | 'none'
    modifier: number
    spellsaveDc: number
    attackBonus: number
  }
  spellSlots: {
    levelOne: {
      total: number
      expended: 0 | 1 | 2 | 3 | 4
    }
    levelTwo: {
      total: number
      expended: 0 | 1 | 2 | 3
    }
    levelThree: {
      total: number
      expended: 0 | 1 | 2 | 3
    }
    levelFour: {
      total: number
      expended: 0 | 1 | 2 | 3
    }
    levelFive: {
      total: number
      expended: 0 | 1 | 2 | 3
    }
    levelSix: {
      total: number
      expended: 0 | 1 | 2
    }
    levelSeven: {
      total: number
      expended: 0 | 1 | 2
    }
    levelEight: {
      total: number
      expended: 0 | 1
    }
    levelNine: {
      total: number
      expended: 0 | 1
    }
  }
  preparedSpells?: PreparedSpellsType[] | undefined
}
