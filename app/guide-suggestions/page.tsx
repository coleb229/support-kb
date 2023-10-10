"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { findUser, newUser, addGuideSuggestion, getGuideSuggestions } from "@/lib/actions"
import GuideSuggestionForm from "@/components/GuideSuggestionForm"
import GuideSuggestionStorage from "@/components/GuideSuggestionStorage"

export default async function UserGuides() {
  const session = await getServerSession(authOptions)
  const user = await findUser()
  const email = session?.user?.email
  const guides = await getGuideSuggestions()

  user?.email === email ? console.log("User found.") : newUser()

  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-between p-24">
      <div id="container">
        <div id="content">
          <h1 className="text-5xl font-bold">User Guide Suggestions</h1>
          <p className="text-2xl">Got an idea for a knowledge article?</p>
          <p className="text-2xl pb-10">Submit your idea below.</p>
          <div className="text-lg px-4 py-2 border-2 border-black w-fit hover:bg-black hover:text-white">
            <GuideSuggestionForm addGuideSuggestion={addGuideSuggestion} />
          </div>
          <hr className="my-10" />
          <h2 className="text-3xl font-bold">Guide Suggestions</h2>
          <p className="text-xl pb-10">Check out what other users have suggested.</p>
          <div className="">
            <GuideSuggestionStorage guideSuggestions={guides} />
          </div>
        </div>
      </div>
    </main>
  )
}