import AnimatedLayout from "@/app/layouts/AnimatedLayout"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { db } from "@/config/firebase.config"
import { ClassNameType, mainClassType } from "@/types/mainClassType"
import { doc, getDoc } from "firebase/firestore"
import { useAtom, useAtomValue } from "jotai"
import { useEffect } from "react"
import { genderAtom, mainClassAtom } from "../Atoms/characterAtom"
import { classListAtom } from "../Atoms/creationDataAtom"

const SelectedClassDisplay = ({ selectedClass, gender, playerClasses }: { selectedClass: ClassNameType, gender: 'f' | 'm' | undefined, playerClasses: mainClassType[] }) => {
  const thisClass = playerClasses.find((playerClass) => playerClass.name === selectedClass)

  if (thisClass) {
    return (
      <div className="flex flex-row justify-center items-center gap-4 w-full">
        <div
          className="border-primary bg-cover bg-top border rounded-lg w-96 min-w-[80px] max-w-[120px] h-96 min-h-[80px] max-h-[120px]"
          style={{ backgroundImage: `url(${thisClass?.image[gender ? gender : 'f']})` }}></div>
        <div className="flex flex-col justify-between items-start grow">
          <div className="font-serif text-lg text-primary">
            {thisClass.name.charAt(0).toUpperCase() + thisClass.name.slice(1)}
          </div>
          <div className="text-left">
            {thisClass.accentText}
          </div>
        </div>
      </div>
    )
  }
}

const MainClass = () => {
  const [playerClasses, setPlayerClasses] = useAtom(classListAtom)
  const gender = useAtomValue(genderAtom)
  const [mainClassSelect, setMainClassSelect] = useAtom(mainClassAtom)

  // populate classList from database
  useEffect(() => {
    (async () => {
      const list: mainClassType[] = [];
      const classListFirebase = await getDoc(doc(db, 'database', 'PlayerClasses'))
      if (classListFirebase.exists()) {
        const classArray = classListFirebase.data()
        Object.keys(classArray).forEach(element => {
          list.push(classArray[element])
        });
      }
      setPlayerClasses(list)
    })()
  }, [setPlayerClasses])

  const handleClassSelect = (playerClassName: ClassNameType) => {
    setMainClassSelect(playerClassName)
  }

  return (
    <AnimatedLayout>
      <div className="bg-background/80 backdrop-blur-sm mx-auto mb-20 px-10 py-5 rounded-lg max-w-3xl">
        <div className="mb-2 font-serif text-3xl text-center text-primary">Choose a Class</div>
        <div className="flex justify-center items-center p-1 border rounded-lg min-h-[80px] font-sans text-center text-muted-foreground">
          {mainClassSelect && playerClasses
            ? <SelectedClassDisplay selectedClass={mainClassSelect} gender={gender} playerClasses={playerClasses} />
            : <p>This is your character's occupation</p>
          }
        </div>

        <div className="flex flex-wrap justify-evenly gap-4 mt-4">
          {playerClasses.map((playerClass, key) => (
            <Dialog key={key + playerClass.name}>
              <DialogTrigger asChild>
                <Button className="hover:border-primary rounded-lg w-[300px] sm:w-[200px]"
                  variant="outline">
                  {playerClass.name.toUpperCase()}
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-cover bg-center p-8 sm:max-w-[425px] max-h-lvh" style={{ backgroundImage: `url(${playerClass.image[gender ? gender : 'f']})` }}>
                <DialogHeader className="bg-background/80 backdrop-blur-sm p-4">
                  <DialogTitle className="font-serif text-center">{playerClass.name.toUpperCase()}</DialogTitle>
                  <DialogDescription className="text-center italic">
                    {playerClass.accentText}
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="border rounded-md w-full max-h-96">
                  <div className="bg-background/80 backdrop-blur-sm p-4" >
                    <h2 className="mb-2 font-serif text-primary">Class Description</h2>
                    <p className="mb-2">{playerClass.description.charAt(0).toUpperCase() + playerClass.description.slice(1)}</p>
                    <p className="mb-2 text-primary">Primary Attribute:
                      <span className="pl-2 text-foreground">{playerClass.primaryAbility.charAt(0).toUpperCase() + playerClass.primaryAbility.slice(1)}</span>
                    </p>
                    <p className="mb-2 text-primary">Hitpoint Die:
                      <span className="pl-2 text-foreground">d{playerClass.classFeatures.hitPoints.hitDice}</span>
                    </p>
                    <p className="mb-2 text-primary">Armor Proficiency:
                      <span className="pl-2 text-foreground">
                        {playerClass.classFeatures.proficiencies.armorProficiency === 'none' ? 'none' : playerClass.classFeatures.proficiencies.armorProficiency.map((item, index) => (<span key={'armorprof' + index}>{item}{index === playerClass.classFeatures.proficiencies.armorProficiency.length - 1 ? '' : ', '}</span>))}
                      </span>
                    </p>
                    <p className="mb-2 text-primary">Weapon Proficiency:
                      <span className="pl-2 text-foreground">
                        {playerClass.classFeatures.proficiencies.weaponProficiency.map((item, index) => (<span key={'weaponprof' + index}>{item}{index === playerClass.classFeatures.proficiencies.weaponProficiency.length - 1 ? '' : ', '}</span>))}
                      </span>
                    </p>
                    <p className="text-primary">Tool Proficiency:</p>
                    <p className="text-foreground">
                      {playerClass.classFeatures.proficiencies.tools.fixed === 'none'
                        ? 'none'
                        : Array.isArray(playerClass.classFeatures.proficiencies.tools.fixed)
                          ? playerClass.classFeatures.proficiencies.tools.fixed.map((item, index) => (<span key={'toolprof' + index}>{item.item}{index === (Array.isArray(playerClass.classFeatures.proficiencies.tools.fixed)
                            ? playerClass.classFeatures.proficiencies.tools.fixed.length - 1
                            : 0)
                            ? ''
                            : ', '}</span>))
                          : playerClass.classFeatures.proficiencies.tools.fixed.item}
                    </p>
                  </div>
                </ScrollArea>
                <DialogFooter className="flex-col sm:justify-between gap-1 bg-background/80 backdrop-blur-sm p-2 rounded-lg">
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => handleClassSelect(playerClass.name)}
                      className="rounded-lg grow">
                      Select {playerClass.name.charAt(0).toUpperCase() + playerClass.name.slice(1)}
                    </Button>
                  </DialogTrigger>
                  <DialogTrigger asChild>
                    <Button variant='destructive' className="rounded-lg">Cancel</Button>
                  </DialogTrigger>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </AnimatedLayout>
  )
}


export default MainClass