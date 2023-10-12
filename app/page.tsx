import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export default function Home() {
  return (
    <main id="container">
      <div id="">
        <div id="content">
          <h1 className="text-5xl font-bold">Support Portal Landing Page</h1>
          <p className="text-2xl pb-10">Not sure where to get started?</p>
          <CommandDropdown />
        </div>
      </div>
    </main>
  )
}

const CommandDropdown = () => {
  return (
    <Command className="border-[1px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Current">
          <CommandItem><a href="/articles">Knowledge Articles</a></CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Discussion">
          <CommandItem><a href="/discoveries">Discoveries</a></CommandItem>
          <CommandItem><a href="/user-guides">User Guide Submissions</a></CommandItem>
          <CommandItem><a href="/guide-suggestions">Guide Suggestions</a></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}