import { motion } from "motion/react"
import { useNavigate } from "react-router"
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card"

const AnimatedCreateCard = motion.create(Card)

const initialStateAnim = { opacity: 0, transform: 'rotateY(90deg)' }
const naturalStateAnim = { opacity: 1, transform: 'rotateY(0deg)' }

const CreateCard = ({ ...props }) => {
  const navigate = useNavigate()

  return (
    <AnimatedCreateCard
      initial={initialStateAnim}
      animate={naturalStateAnim}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      exit={initialStateAnim}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      {...props}
      className="flex flex-col justify-between p-0 rounded-none w-[300px]">
      <CardHeader
        className="flex justify-center bg-cover bg-top p-0 pb-2 w-full h-full min-h-40 text-center"
        style={{ backgroundImage: 'url("/images/misc/Untitled(42).png")' }}
      >
        <CardTitle
          className="font-serif text-primary text-xl">
          Create a Character
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex p-0">
        <div onClick={() => navigate('/create')} className="bg-green-500 p-1 text-black text-center hover:text-white cursor-pointer grow">Play</div>
      </CardFooter>
    </AnimatedCreateCard>
  )
}

export default CreateCard
