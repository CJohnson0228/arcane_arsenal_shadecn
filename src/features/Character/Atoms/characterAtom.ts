import { CharacterType } from '@/types/Character.type'
import { emptyCharacter } from '@/utils/emptyCharacter'
import { focusAtom } from 'jotai-optics'
import { atomWithDefault } from 'jotai/utils'

const newCharacterAtom = atomWithDefault<CharacterType>(() => emptyCharacter)

const advancementAtom = focusAtom(newCharacterAtom, (optic) =>
  optic.prop('advancementType')
)
const characterNameAtom = focusAtom(newCharacterAtom, (optic) =>
  optic.prop('characterName')
)
const hitpointsAdvanceAtom = focusAtom(newCharacterAtom, (optic) =>
  optic.prop('hitpointAdvance')
)
const encumbranceRuleAtom = focusAtom(newCharacterAtom, (optic) =>
  optic.prop('encumbranceRule')
)
const abilityScoreDisplayAtom = focusAtom(newCharacterAtom, (optic) =>
  optic.prop('abilityScoreDisplay')
)
const encumbranceCoinAtom = focusAtom(newCharacterAtom, (optic) =>
  optic.prop('encumbranceIgnoreCoins')
)
const genderAtom = focusAtom(newCharacterAtom, (optic) => optic.prop('gender'))

const mainClassAtom = focusAtom(newCharacterAtom, (optic) =>
  optic.prop('mainClass')
)

export {
  abilityScoreDisplayAtom,
  advancementAtom,
  characterNameAtom,
  encumbranceCoinAtom,
  encumbranceRuleAtom,
  genderAtom,
  hitpointsAdvanceAtom,
  mainClassAtom,
  newCharacterAtom,
}
