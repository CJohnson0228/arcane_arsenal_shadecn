import { ScrollArea } from "@/components/ui/scroll-area"
import { Outlet } from "react-router"
import CreateMenu from "../components/CreateMenu"

const CreateCharacter = () => {
  return (
    <div className="relative">
      <div className="top-[48px] z-20 fixed flex justify-center bg-zinc-800 backdrop-blur-sm py-1 w-full text-primary-foreground">
        <CreateMenu />
      </div>
      <div className="mx-auto pt-[50px] md:pt-[50px] container">
        <ScrollArea>
          <Outlet />
        </ScrollArea>
      </div>
    </div>
  )
}

export default CreateCharacter
