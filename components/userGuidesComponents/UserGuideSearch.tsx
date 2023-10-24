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
                    <AddImages id={guide.id} />
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

export const AddImages = ({id}:any) => {
  const [imageUploaded, setImageUploaded] = useState();

  const handleChange = (event:any) => {
    setImageUploaded(event.target.files[0]);
  };

  const submitData = async (e:any) => {
    e.preventDefault();

    if (!imageUploaded) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", imageUploaded);

      await fetch("/api/upload", {
        method: "POST",
        body: formData
      });

      Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action={submitData}>
      <AlertDialog>
        <AlertDialogTrigger>Add Images</AlertDialogTrigger>
        <AlertDialogContent className="max-w-xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Select an image from your local storage</AlertDialogTitle>
            <AlertDialogDescription>
                <h1>Upload Image</h1>
                <input
                  onChange={handleChange}
                  accept=".jpg, .png, .gif, .jpeg"
                  type="file"
                />
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