import AnimatedLayout from "@/app/layouts/AnimatedLayout"
import { userAtom } from "@/atoms/userAtom"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useAtom, useAtomValue } from "jotai"
import { Plus } from "lucide-react"
import { useEffect } from "react"
import { abilityScoreDisplayAtom, advancementAtom, characterNameAtom, encumbranceCoinAtom, encumbranceRuleAtom, genderAtom, hitpointsAdvanceAtom } from "../Atoms/characterAtom"


const Home = () => {
  const player = useAtomValue(userAtom)
  const [advancementSelect, setAdvancementSelect] = useAtom(advancementAtom)
  const [characterNameEntry, setCharacterNameEntry] = useAtom(characterNameAtom)
  const [hitpointAdvance, setHitpointAdvance] = useAtom(hitpointsAdvanceAtom)
  const [encumbranceRule, setEncumbranceRule] = useAtom(encumbranceRuleAtom)
  const [abilityScoreDisplay, setAbilityScoreDisplay] = useAtom(abilityScoreDisplayAtom)
  const [coinWeight, setCoinWeight] = useAtom(encumbranceCoinAtom)
  const [genderSelect, setGenderSelect] = useAtom(genderAtom)

  const handleGenderSwitch = () => {
    if (genderSelect === 'f') {
      setGenderSelect('m')
    } else {
      setGenderSelect('f')
    }
  }

  useEffect(() => { console.log('rendered') }, [])

  const handleCoinWeightSwitch = () => setCoinWeight(!coinWeight)

  return (
    <AnimatedLayout>
      <div className="bg-background/80 backdrop-blur-sm mx-auto mb-20 rounded-lg max-w-3xl">
        <div className="flex flex-wrap justify-center items-center gap-4 p-5">
          <div className="relative border-2 hover:border-primary w-20 h-20 cursor-pointer">
            <div
              className="top-0 left-0 absolute bg-cover bg-center opacity-70 w-full h-full"
              style={{
                backgroundImage: `url(${genderSelect === 'm' ? '/images/player_avatars/default_m.png' : '/images/player_avatars/default_f.png'})`
              }}></div>
            <Button
              variant='ghost'
              className="top-0 left-0 z-10 absolute flex justify-center items-center hover:bg-zinc-500/20 rounded-none w-full h-full text-white hover:text-white"><Plus /></Button>
          </div>
          <div className="flex md:flex-row flex-col flex-grow">
            <div className="flex-grow">
              <Label
                className="text-lg"
                htmlFor="character-name">
                Character Name
              </Label>
              <Input
                type="text"
                id="character-name"
                value={characterNameEntry}
                onChange={(e) => setCharacterNameEntry(e.target.value)}
                placeholder={`${player.displayName}'s character`} />
              {/* add a way to recommend names from api call ?*/}
            </div>
            <div className="flex flex-row md:flex-col justify-between items-center md:space-y-2 md:mx-5 mt-2">
              <Label htmlFor="gender-switch">Gender</Label>
              <div className="flex items-center space-x-2 ml-2 text-muted-foreground">
                <span>M</span>
                <Switch id="gender-switch" checked={genderSelect === 'm' ? false : true} onClick={() => handleGenderSwitch()} />
                <span>F</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <div className="mb-2 text-lg text-primary">Character Preferences</div>
          <div className="flex flex-col mb-5">
            <div className="text-md">
              Advancement Type
            </div>
            <div className="pb-2 text-muted-foreground text-sm">
              Does this character advance using experience or story-based progression
            </div>
            <Select value={advancementSelect} onValueChange={((value: 'milestone' | 'experience') => setAdvancementSelect(value))}>
              <SelectTrigger className="">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="milestone">Milestone</SelectItem>
                  <SelectItem value="experience">Experience</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col mb-5">
            <div className="text-md">
              Hit Point Type
            </div>
            <div className="pb-2 text-muted-foreground text-sm">
              When leveling up your character you gain hit points. Will you use the fixed value for your chosen class or manually enter a rolled value?
            </div>
            <Select value={hitpointAdvance} onValueChange={((value: 'fixed' | 'manual') => setHitpointAdvance(value))}>
              <SelectTrigger className="">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="fixed">Fixed</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col mb-5">
            <div className="text-md">
              Encumbrance Type
            </div>
            <div className="pb-2 text-muted-foreground text-sm">
              Use the Standard rules for encumbrance, the more detailed Variant rules, or Disable encumbrance.
            </div>
            <Select value={encumbranceRule} onValueChange={((value: 'standard' | 'variant' | 'disabled') => setEncumbranceRule(value))}>
              <SelectTrigger className="">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="variant">Variant</SelectItem>
                  <SelectItem value="disabled">Disabled</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col mb-5">
            <div className="text-md">
              Coin Encumbrance Rule
            </div>
            <div className="pb-2 text-muted-foreground text-sm">
              Coins are weightless for the purposes of Encumbrance.
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="coin-weight" checked={coinWeight} onCheckedChange={handleCoinWeightSwitch} />
              <label
                htmlFor="coin-weight"
                className="font-medium text-sm leading-none"
              >
                Ignore Coin Weight
              </label>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <div className="text-md">
              Ability Score Display
            </div>
            <div className="pb-2 text-muted-foreground text-sm">
              Display Score in main ability acore window, or Modifier?
            </div>
            <Select value={abilityScoreDisplay} onValueChange={((value: 'modifier' | 'score') => setAbilityScoreDisplay(value))}>
              <SelectTrigger className="">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="modifier">Modifier Top</SelectItem>
                  <SelectItem value="score">Score Top</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  )
}

export default Home