import { atom } from 'jotai'

const authAtom = atom<boolean>(false)
const artisanAtom = atom<number>(1)
const artisanUrlAtom = atom<string>('')
const userMenuOpenAtom = atom<boolean>(false)

export { artisanAtom, artisanUrlAtom, authAtom, userMenuOpenAtom }
