"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function GuideSuggestionForm({ addGuideSuggestion }:any) {
  return (
    <>    
      <Sheet>
        <SheetTrigger>Open Form</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mt-20">What should we add to the wishlist?</SheetTitle>
            <SheetDescription>
              <form className="flex flex-col space-y-2" action={addGuideSuggestion}>
                <label htmlFor="title">Article Topic</label>
                <input
                  className="border border-gray-300"
                  id="title"
                  name="title"
                  type="text"
                />
                <label htmlFor="description">Description</label>
                <textarea
                  className="border border-gray-300"
                  id="description"
                  name="description"
                  rows={4}
                />
                <button className="border border-gray-300" type="submit">Submit</button>
              </form>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}