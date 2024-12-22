import { atom } from 'jotai'

interface UserType {
  displayName: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  initials: string | undefined
  photoUrl: string | undefined
  email: string | undefined
  emailVerified: boolean
  uid: string | undefined
}

const userAtom = atom<UserType>({
  displayName: undefined,
  firstName: undefined,
  lastName: undefined,
  initials: undefined,
  photoUrl: undefined,
  email: undefined,
  emailVerified: false,
  uid: undefined,
})

export { userAtom }
