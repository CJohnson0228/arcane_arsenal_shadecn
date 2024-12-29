import { CharacterType } from '@/types/Character.type'
import { atom } from 'jotai'

const cardCharactersAtom = atom<CharacterType[]>()
const fullCharacterAtom = atom<CharacterType>()

export { cardCharactersAtom, fullCharacterAtom }
