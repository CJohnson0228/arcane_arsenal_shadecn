import { CharacterType, SimpleCharacterType } from '@/types/Character.type'
import { atom } from 'jotai'

const cardCharactersAtom = atom<SimpleCharacterType[]>()
const fullCharacterAtom = atom<CharacterType>()

export { cardCharactersAtom, fullCharacterAtom }
