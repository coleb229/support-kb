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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import React, { useState } from "react";
import Router from "next/router";
import Dropzone from "./Dropzone";

export default function ArticleTables({ guides }:any) {
  return (
    <div>
      <div className="w-[800px] border-2">
        <Command>
          <CommandInput placeholder="Search for a current article..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Guides">
              {guides.map((guide:any) => (
                <CommandItem>
                  <div className="flex justify-between w-full">
                    <a href={`/user-guides/${guide.id}`}>{guide.title}</a>
                    <AddImages />
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  )
}

export const AddImages = () => {
  return (
    <form action=''>
      <AlertDialog>
        <AlertDialogTrigger>Add Images</AlertDialogTrigger>
        <AlertDialogContent className="max-w-xl max-h-[50vh]">
          <AlertDialogHeader>
            <AlertDialogTitle>Select an image from your local storage</AlertDialogTitle>
            <AlertDialogDescription>
              <Dropzone className='' />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </form>
  )
}