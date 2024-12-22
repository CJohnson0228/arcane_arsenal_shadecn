import { SimpleCharacterType } from "@/types/Character.type"
import { forwardRef } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

interface CharacterCardProps extends React.HTMLAttributes<HTMLDivElement> {
  character: SimpleCharacterType
}

interface ContentItemProps {
  label: string
  value: string | number | undefined
}
function ContentItem({ label, value }: ContentItemProps) {
  return (
    <div className="flex justify-between">
      <h5>
        {label}
      </h5>
      <h6 className="text-muted-foreground">
        {value}
      </h6>
    </div>
  )
}

const CharacterCard = forwardRef<
  HTMLDivElement, CharacterCardProps
>(({ character, ...props }, ref) => {
  const gender = character.gender ? character.gender : 'f'
  const bgImage = '/images/classes/' + character.mainClass + '-' + gender + '.png'

  return (
    <Card className="p-0 rounded-none w-[300px]" ref={ref} {...props}>
      <CardHeader
        className="flex justify-end bg-cover bg-top p-0 pb-2 w-full h-[100px] md:h-[200px] text-center"
        style={{ backgroundImage: `url(${bgImage})` }}>
        <CardTitle
          className="font-serif text-primary text-xl">
          {character.characterName}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <ContentItem label='Class:' value={character.mainClass} />
        <ContentItem label='Sub-Class:' value={character.subClass} />
        <ContentItem label='Species:' value={character.species} />
        <ContentItem label='Level:' value={character.level} />
      </CardContent>
      <CardFooter className="flex p-0">
        <div className="bg-green-500 p-1 text-center text-primary-foreground grow">Play</div>
        <div className="bg-cyan-500 p-1 text-center text-primary-foreground grow">Edit</div>
        <div className="bg-red-500 p-1 text-center text-primary-foreground grow">Delete</div>
      </CardFooter>
    </Card>
  )
})

export default CharacterCard
