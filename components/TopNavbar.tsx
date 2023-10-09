'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export default function TopNavbar() {
  return (
    <div className="flex justify-between items-center bg-slate-100 px-10">
      <MenuNavs />
      <div>
        <a href="/" className="hover:text-slate-500">Home</a>
      </div>
    </div>
  )
}

const MenuNavs = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="flex justify-around">

          {/* Tools */}

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-100">Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink>
                  <a 
                    href="https://improved-call-notes-app.vercel.app/" 
                    target="_blank" 
                    className="text-xs flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-lg hover:shadow-md"
                  >
                    Improved Call Notes App
                  </a>
                  <div className="px-10 py-2 bg-slate-30">
                    <p className="text-xs border-b-[1px] border-gray">Call note taking app with storage capabilities and added features</p>
                    <p className="text-xs">Built with Next.js, Prisma, and MongoDB</p>
                  </div>
                  </NavigationMenuLink>
                  <hr className="border-gray-200 my-2" />
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink>
                  <a 
                    href="https://coleb229.github.io/Call-Notes-App/" 
                    target="_blank" 
                    className="text-xs flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-lg hover:shadow-md"
                  >
                    Call Notes App
                  </a>
                  <div className="px-10 py-2 bg-slate-30">
                    <p className="text-xs border-b-[1px] border-gray">Initial iteration of the Call Notes App</p>
                    <p className="text-xs">Built with Create React App</p>
                    <p className="text-xs">Hosted on GitHub Pages</p>
                    <p className="text-xs">Much faster, but stored locally without caching</p>
                  </div>
                  </NavigationMenuLink>
                  <hr className="border-gray-200 my-2" />
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <a 
                      href="https://github.com/coleb229/compare_csv" 
                      target="_blank" 
                      className="text-xs flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-lg hover:shadow-md"
                    >
                      Transaction Comparison Tool
                    </a>
                    <div className="px-10 py-2 bg-slate-30">
                      <p className="text-xs border-b-[1px] border-gray">Comparison tool for comparing our data with settlement reports</p>
                      <p className="text-xs">Built with Python</p>
                      <p className="text-xs">Really annoying to use because I suck at Python</p>
                      <p className="text-xs">Rough setup</p>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

      {/* External References */}

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-100">External References</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink>
                  <a 
                    href="https://drive.google.com/drive/folders/1fIgkicbJ5lbi8M3CV-VFuOYNNux0LCLI" 
                    target="_blank" 
                    className="text-xs flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-lg hover:shadow-md"
                  >
                    Guides ( Work in Progress )
                  </a>
                  </NavigationMenuLink>
                  <hr className="border-gray-200 my-2" />
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink>
                  <a 
                    href="https://drive.google.com/drive/folders/1UxDT6GPVaDeV4cYr08EfI-zOab5yBXxU" 
                    target="_blank" 
                    className="text-xs flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-lg hover:shadow-md"
                  >
                    Resources [In Progress]
                  </a>
                  </NavigationMenuLink>
                  <hr className="border-gray-200 my-2" />
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink>
                    <a 
                      href="https://drive.google.com/drive/folders/1UxDT6GPVaDeV4cYr08EfI-zOab5yBXxU" 
                      target="_blank" 
                      className="text-xs flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-lg hover:shadow-md"
                    >
                      Ponder
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Discussion */}

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-slate-100">Discussion</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink>
                  <a 
                    href="https://drive.google.com/drive/folders/1fIgkicbJ5lbi8M3CV-VFuOYNNux0LCLI" 
                    target="_blank" 
                    className="text-xs flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-lg hover:shadow-md"
                  >
                    Discoveries [WIP]
                  </a>
                  </NavigationMenuLink>
                  <hr className="border-gray-200 my-2" />
                </li>
                <li className="row-span-3">
                  <NavigationMenuLink>
                  <a 
                    href="https://drive.google.com/drive/folders/1UxDT6GPVaDeV4cYr08EfI-zOab5yBXxU" 
                    target="_blank" 
                    className="text-xs flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-lg hover:shadow-md"
                  >
                    User Guide Submissions [WIP]
                  </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <hr className="border-gray-200 my-2" />
    </>
  )
}