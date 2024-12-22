import { authAtom, userMenuOpenAtom } from '@/atoms/appAtom';
import { userAtom } from '@/atoms/userAtom';
import { useAtom, useAtomValue } from 'jotai';
import { Bell, MessageSquare } from 'lucide-react';
import { motion } from "motion/react";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaBluesky, FaTiktok } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { ModeToggle } from './theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const navlinks = [
  { title: 'discord', icon: <FaDiscord />, link: 'https://discord.com/' },
  { title: 'facebook', icon: <FaFacebook />, link: 'https://www.facebook.com/' },
  { title: 'bluesky', icon: <FaBluesky />, link: 'https://bsky.app/' },
  { title: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/' },
  { title: 'twitch', icon: <FaTwitch />, link: 'https://www.twitch.tv/' },
  { title: 'youtube', icon: <FaYoutube />, link: 'https://www.youtube.com/' },
  { title: 'tiktok', icon: <FaTiktok />, link: 'https://www.tiktok.com/' },
]

const syslinks = [
  { title: 'messages', icon: <MessageSquare />, link: '' },
  { title: 'notifications', icon: <Bell />, link: '' },
]

const initialStateAnim = { opacity: 0, transform: 'translateY(-50px)' }
const naturalStateAnim = { opacity: 1, transform: 'translateY(0px)' }

const MotionButton = motion.create(Button)

function Navbar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useAtom(userMenuOpenAtom)
  const auth = useAtomValue(authAtom)
  const user = useAtomValue(userAtom)

  const toggleUserMenu = () => setMenuOpen(!menuOpen)

  return (
    <div className="z-50 fixed bg-background w-screen">
      <div className="flex justify-between items-center mx-auto px-3 py-1 container">
        <motion.h1
          initial={initialStateAnim}
          animate={naturalStateAnim}
          exit={initialStateAnim}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="font-serif text-xl">
          Arcane Arsenal
        </motion.h1>
        <div
          className='flex items-center space-x-2 my-2 h-6'>
          {navlinks.map((navlink, key) =>
            <MotionButton
              initial={initialStateAnim}
              animate={naturalStateAnim}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: key * 0.1 }}
              variant='ghost'
              key={'navlink-' + key}
              size='icon'
              onClick={() => { window.location.href = navlink.link }}
              className='md:inline-flex hidden hover:bg-primary/20 navlink'>
              {navlink.icon}
            </MotionButton>
          )}
          <Separator orientation='vertical' className='md:inline-block hidden' />
          {auth ?
            <>
              {syslinks.map((syslink, key) =>
                <MotionButton
                  initial={initialStateAnim}
                  animate={naturalStateAnim}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: key * 0.1 }}
                  variant='ghost'
                  key={'syslink-' + key}
                  size='icon'
                  onClick={() => { window.location.href = syslink.link }}
                  className='md:inline-flex hidden hover:bg-primary/20 syslink'>
                  {syslink.icon}
                </MotionButton>
              )}
              <Separator orientation='vertical' className='md:inline-block hidden' />
              <MotionButton
                initial={initialStateAnim}
                animate={naturalStateAnim}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                variant='ghost'
                key='avatar-button'
                size='icon'
                onClick={toggleUserMenu}
                className='hover:bg-primary/20 syslink'>
                <Avatar>
                  <AvatarImage src={user.photoUrl} />
                  <AvatarFallback className='hover:bg-primary hover:text-primary-foreground'>{user.initials}</AvatarFallback>
                </Avatar>
              </MotionButton>
            </> :
            <MotionButton
              initial={initialStateAnim}
              animate={naturalStateAnim}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              variant='default'
              size='sm'
              onClick={() => navigate('/auth')}>
              Login
            </MotionButton>
          }
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
