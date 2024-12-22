import { artisanUrlAtom } from '@/atoms/appAtom'
import { Separator } from '@/components/ui/separator'
import { useAtom } from 'jotai'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import AnimatedLayout from '../../app/layouts/AnimatedLayout'
import Login from './routes/Login'
import Register from './routes/Register'

export interface AuthProps {
  switch: () => void
}

function Auth() {
  const [login, setLogin] = useState<boolean>(true)
  const ImageUrl = useAtom(artisanUrlAtom)
  const [artisanImageUrl, setArtisanImageUrl] = useState('')

  const handleSwitch = () => {
    setLogin(!login)
  }

  useEffect(() => {
    setArtisanImageUrl('/images/artisans/' + ImageUrl[0])
  }, [ImageUrl, artisanImageUrl])

  return (
    <AnimatedLayout>
      <div
        className='flex justify-center items-center h-dvh'>
        <div
          className='flex md:flex-row flex-col-reverse border-primary bg-background border rounded-lg md:h-auto overflow-hidden'>
          <div style={{ minHeight: '420px' }}
            className='flex items-center border-primary/50 px-10 py-5 column grow'>
            <AnimatePresence mode='wait'>
              {login
                ? <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className='flex flex-col w-full'
                  key='loginForm'>
                  <Login switch={handleSwitch} />
                </motion.div>
                : <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className='flex flex-col w-full'
                  key='registerForm'>
                  <Register switch={handleSwitch} />
                </motion.div>
              }
            </AnimatePresence>
          </div>
          <Separator orientation='vertical' />
          {/* modile Artisan Avatar */}
          <div
            className='flex justify-center items-end md:hidden bg-cover bg-top pb-5 font-handwriting text-3xl'
            style={{
              backgroundImage: `url(${artisanImageUrl})`,
              height: '450px',
              width: '350px',
              maxWidth: '90vw',
              maxHeight: '30vh'
            }}>
            <h3 className='border-primary/20 bg-slate-900/30 shadow-lg backdrop-blur-sm px-5 py-2 border rounded-2xl text-slate-300'>
              The Arsenal Awaits
            </h3>
          </div>
          {/* desktop Artisan Avatar */}
          <div
            className='md:flex justify-center items-end hidden bg-cover bg-center pb-10 h-svh font-handwriting text-3xl'
            style={{
              backgroundImage: `url(${artisanImageUrl})`,
              height: '540px',
              width: '350px',
              maxWidth: '90vw',
              maxHeight: '90vh'
            }}>
            <h3 className='border-primary/20 bg-slate-900/30 shadow-lg backdrop-blur-sm px-5 py-2 border rounded-2xl text-slate-300'>
              The Arsenal Awaits
            </h3>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  )
}

export default Auth
