'use client'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export default function ArticleTables({ guides }:any) {
  return (
    <div>
      <div className="w-[800px] border-2">
        <Command>
          <CommandInput placeholder="Search for a current article..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Current">
              {guides.map((guide:any) => (
                <CommandItem><a href={`/user-guides/${guide.id}`}>{guide.title}</a></CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  )
}