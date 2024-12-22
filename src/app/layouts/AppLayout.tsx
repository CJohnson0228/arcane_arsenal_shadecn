import Navbar from '@/components/Navbar'
import { ScrollArea } from '@/components/ui/scroll-area'
import UserMenu from '@/components/UserMenu'
import { AnimatePresence } from 'motion/react'
import React from 'react'
import { useLocation, useOutlet } from 'react-router'


const AnimateOutlet = (): React.JSX.Element => {
  const location = useLocation()
  const element = useOutlet()

  return (
    <AnimatePresence mode='wait' initial={true}>
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  )
}

function AppLayout() {
  return (
    <div className="bg-[image:var(--background-image)] bg-cover bg-center w-screen h-screen overflow-hidden">
      <Navbar />
      <ScrollArea className="mt-[48px] w-full h-full">
        <AnimateOutlet />
      </ScrollArea>
      <UserMenu />
    </div>
  )
}

export default AppLayout
