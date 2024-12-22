import { userMenuOpenAtom } from '@/atoms/appAtom'
import { cardCharactersAtom } from '@/atoms/charactersAtom'
import { userAtom } from '@/atoms/userAtom'
import useAuthentication from '@/features/Auth/hooks/useAuth'
import { fetchUsersCharacters } from '@/utils/fetchCharacters'
import { useAtom, useAtomValue } from 'jotai'
import { ArrowBigRight, UserRoundPen } from 'lucide-react'
import { useEffect } from 'react'
import { Button } from './ui/button'
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from './ui/drawer'

function UserMenu() {
  const [menuOpen, setMenuOpen] = useAtom(userMenuOpenAtom)
  const user = useAtomValue(userAtom)
  const [characters, setCharacters] = useAtom(cardCharactersAtom)
  const { signOutCall } = useAuthentication()

  useEffect(() => {
    (async () => {
      if (user.uid) {
        const charactersData = await fetchUsersCharacters(user.uid)
        setCharacters(charactersData)
      }
    })()
  }, [setCharacters, user.uid])

  return (
    <Drawer direction='right' open={menuOpen}>
      <DrawerContent className='rounded-t-none'>
        <DrawerHeader className='p-0'>
          <DrawerTitle className='bg-muted mb-2 py-2 font-serif text-center text-lg text-primary uppercase'>
            {user.displayName}
          </DrawerTitle>
        </DrawerHeader>
        <div className='mb-4 px-5'>
          <div className='flex justify-between items-center mb-3 border-b-2'>
            <h6>Profile</h6>
            <Button variant='ghost' size='icon'><UserRoundPen /></Button>
          </div>
          <ul>
            <li className='flex justify-between'>
              <div className='text-muted-foreground'>Display Name:</div>
              <div className='text-primary'><p>{user.displayName}</p></div>
            </li>
            <li className='flex justify-between'>
              <div className='text-muted-foreground'>First Name:</div>
              <div className='text-primary'><p>{user.firstName}</p></div>
            </li>
            <li className='flex justify-between'>
              <div className='text-muted-foreground'>Last Name:</div>
              <div className='text-primary'><p>{user.lastName}</p></div>
            </li>
            <li className='flex justify-between'>
              <div className='text-muted-foreground'>Initials:</div>
              <div className='text-primary'><p>{user.initials}</p></div>
            </li>
            <li className='flex justify-between'>
              <div className='text-muted-foreground'>E-mail:</div>
              <div className='text-primary'><p>{user.email}</p></div>
            </li>
            <li className='flex justify-between'>
              <div className='text-muted-foreground'>Avatar:</div>
              <div className='text-primary'><p>{user.photoUrl}</p></div>
            </li>
          </ul>
          <Button className='bg-muted hover:bg-red-500 mt-2 rounded-none w-full text-red-500 hover:text-primary-foreground' onClick={() => signOutCall()}>Logout</Button>
        </div>
        <div className='mb-2 px-5'>
          <div className='flex justify-between items-center mb-3 border-b-2'>
            <h6>Messages</h6>
            <Button variant='ghost' size='icon'><ArrowBigRight /></Button>
          </div>
        </div>
        <div className='mb-2 px-5'>
          <div className='flex justify-between items-center mb-3 border-b-2'>
            <h6>Community - (coming soon)</h6>
            <Button variant='ghost' size='icon'><ArrowBigRight /></Button>
          </div>
        </div>
        <div className='mb-2 px-5'>
          <div className='flex justify-between items-center mb-3 border-b-2'>
            <h6>Characters</h6>
            <Button variant='ghost' size='icon'><ArrowBigRight /></Button>
          </div>
          <ul>
            {characters?.map((character, key) =>
              <li key={key} className='hover:bg-muted p-2'>
                <div className='flex justify-between'>
                  <span className='text-primary'>{character.characterName}</span>
                  <span className='text-muted-foreground'>level {character.level} - {character.species} - {character.mainClass}</span>
                </div>
              </li>
            )}
          </ul>
        </div>
        <DrawerFooter className='p-0'>
          <Button className='bg-muted hover:bg-primary rounded-none text-muted-foreground hover:text-primary-foreground' onClick={() => setMenuOpen(false)}>Close</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default UserMenu
