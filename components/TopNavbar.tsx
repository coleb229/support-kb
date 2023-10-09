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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>References</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink>
                <a 
                  href="https://drive.google.com/drive/folders/1fIgkicbJ5lbi8M3CV-VFuOYNNux0LCLI" 
                  target="_blank" 
                  className="text-xs flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
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
                  className="text-xs flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                >
                  Resources [In Progress]
                </a>
                </NavigationMenuLink>
                <hr className="border-gray-200 my-2" />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/">Home</a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}