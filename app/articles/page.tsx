'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
    <div className="flex flex-col w-screen items-center">
      <PageHeader title="Articles" />
      <div className="my-auto w-[800px] border-2">
        <Command>
          <CommandInput placeholder="Search for a current article..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
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