import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import React, { useState } from "react"
import { Link, useLocation } from "react-router"

const CreateNavLinks = [
  { name: 'Home', link: '/create' },
  { name: 'Class', link: '/create/class' },
  { name: 'Background', link: '/create/background' },
  { name: 'Species', link: '/create/species' },
  { name: 'Abilities', link: '/create/abilities' },
  { name: 'Equipment', link: '/create/equipment' },
  { name: 'Next', link: '/create/next' },
]

const CreateMenu = () => {
  const location = useLocation()
  const [createMenuOpen, setCreateMenuOpen] = useState(false)

  const handleToggleDrawer = () => {
    setCreateMenuOpen(!createMenuOpen)
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className="md:flex hidden">
          {CreateNavLinks.map((navlink, key) =>
            <React.Fragment key={key}>
              <BreadcrumbItem key={key}>
                <BreadcrumbLink asChild
                  className={`hover:text-primary text-zinc-200 border-b-2 px-2 
                    ${location.pathname === navlink.link ? ' border-primary' : 'border-zinc-800'}`}>
                  <Link to={navlink.link}>{navlink.name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {CreateNavLinks.length !== key + 1 && <BreadcrumbSeparator className="text-zinc-400" />}
            </React.Fragment>
          )}
        </BreadcrumbList>
        <BreadcrumbLink asChild className="block md:hidden">
          <Button variant='link' onClick={handleToggleDrawer}>Menu</Button>
        </BreadcrumbLink>
      </Breadcrumb>
      <Drawer direction='left' open={createMenuOpen}>
        <DrawerContent className='rounded-t-none h-lvh'>
          <DrawerHeader className='p-0'>
            <DrawerTitle className='bg-muted mb-0 py-2 font-serif text-2xl text-center text-primary uppercase'>
              <p>Create Menu</p>
            </DrawerTitle>
            <DrawerDescription className="flex justify-center items-center bg-primary p-4 border-b-2 text-lg text-primary-foreground">Create Links</DrawerDescription>
          </DrawerHeader>
          <ul className="px-14">
            {CreateNavLinks.map((navlink, key) =>
              <React.Fragment key={key}>
                <div className="flex justify-center py-3 text-2xl">
                  <Link onClick={handleToggleDrawer} to={navlink.link}>{navlink.name}</Link>
                </div>
                {CreateNavLinks.length !== key + 1 && <Separator />}
              </React.Fragment>
            )}
          </ul>
          <DrawerFooter className='p-0'>
            <Button variant='link' size='lg' className="text-xl" onClick={handleToggleDrawer}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CreateMenu