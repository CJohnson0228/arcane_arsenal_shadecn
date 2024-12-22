import { cardCharactersAtom } from "@/atoms/charactersAtom"
import CharacterCard from "@/components/CharacterCard"
import CreateCard from "@/components/CreateCard"
import { useAtomValue } from "jotai"
import { motion } from "motion/react"

const AnimatedCharacterCard = motion.create(CharacterCard)
const initialStateAnim = { opacity: 0, transform: 'rotateY(90deg)' }
const naturalStateAnim = { opacity: 1, transform: 'rotateY(0deg)' }

function Dashboard() {
  const characters = useAtomValue(cardCharactersAtom)

  return (
    <div className="flex flex-wrap justify-center gap-2.5 pt-10">
      {characters?.map((character, key) =>
        <AnimatedCharacterCard
          initial={initialStateAnim}
          animate={naturalStateAnim}
          exit={initialStateAnim}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: key * 0.1 }}
          character={character}
          key={'charcard' + key}
        />
      )}
      <CreateCard />
    </div>
  )
}

export default Dashboard
