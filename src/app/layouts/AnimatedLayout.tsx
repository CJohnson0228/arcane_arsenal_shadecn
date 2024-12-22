import { motion } from "motion/react"
import { ReactNode } from "react"
type Props = {
  children: ReactNode
}

const variants = {
  hidden: { opacity: 0.5, rotateY: 90, scale: 0.6, x: -1000 },
  enter: { opacity: 1, rotateY: 0, scale: 1, x: 0 },
  exit: { opacity: 0.5, rotateY: 90, scale: 0.6, x: 1000 }
}

const AnimatedLayout = ({ children }: Props) => {
  return (
    <motion.div
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.5, type: 'easeInOut' }}
      className="relative"
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedLayout