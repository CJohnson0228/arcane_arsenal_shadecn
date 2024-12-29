type classNames =
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

type speciesNames =
  | 'aasimar'
  | 'dwarf'
  | 'dragonborn'
  | 'elf'
  | 'firbolg'
  | 'gnome'
  | 'goliath'
  | 'halfling'
  | 'human'
  | 'half-elf'
  | 'half-orc'
  | 'kenku'
  | 'lizardfolk'
  | 'tabaxi'
  | 'tiefling'
  | 'triton'

export interface ProficiencyType {
  name: string
  type:
    | 'skill'
    | "artisan's tools"
    | 'armor'
    | 'weapon'
    | 'musical instrument'
    | 'gaming sets'
    | 'other'
  classes: classNames[]
  species: speciesNames[]
}
