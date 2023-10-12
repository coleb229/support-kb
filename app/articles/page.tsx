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
import { legacyArticles, currentArticles } from "./data/articles.data"
import { PageHeader } from "@/components/PageHeader"

export default function ArticleTables() {
  return (
    <div id="container">
      <PageHeader title="Articles" desc='Search for a knowledge article from the list below.' />
      <div className="w-[800px] border-2">
        <Command>
          <CommandInput placeholder="Search for a current article..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Current">
              {currentArticles.data.articles.map((article) => (
                <CommandItem><a href={`/articles/current/${article.page}`}>{article.title}</a></CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Legacy">
              {legacyArticles.data.articles.map((article) => (
                <CommandItem><a href={`/articles/legacy/${article.page}`}>{article.title}</a></CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  )
}