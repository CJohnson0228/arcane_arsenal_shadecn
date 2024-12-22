import { authAtom } from "@/atoms/appAtom"
import { Button } from "@/components/ui/button"
import { useAtomValue } from "jotai"
import { motion } from "motion/react"
import { useNavigate } from "react-router"
import AnimatedLayout from "../layouts/AnimatedLayout"

function Splash() {
  const navigate = useNavigate()
  const auth = useAtomValue(authAtom)

  return (
    <AnimatedLayout>
      <div className="relative flex justify-center items-center h-dvh">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="border-accent bg-background/65 backdrop-blur-sm px-10 py-5 border rounded-lg splash">
          <motion.h1
            initial={{ scale: 0, y: -50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-serif text-2xl text-primary md:text-4xl">Arcane Arsenal
          </motion.h1>
          <motion.h3
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            className="md:text-right -mt-2 md:pr-4 font-sans text-center text-muted-foreground text-xs">
            Character Creation Re-Imagined
          </motion.h3>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="bottom-20 absolute">
          <Button
            variant='default'
            onClick={() => navigate(auth ? '/dashboard' : '/auth')}>
            Begin
          </Button>
        </motion.div>
      </div>
    </AnimatedLayout>
  )
}

export default Splash
