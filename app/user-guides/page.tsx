"use server"
import { getServerSession } from "next-auth"
import UserGuidesBuilder from "@/components/userGuidesComponents/UserGuideBuilder"
import UserGuideStorage from "@/components/userGuidesComponents/UserGuideStorage"
import { getUserGuides } from "@/lib/actions"

export default async function UserGuides() {
  const session = await getServerSession()
  const name = session?.user?.name
  const firstName = name?.split(" ")[0]
  const guides = await getUserGuides()
  console.log(guides)

  return (
    <div id="container">
      <UserGuideStorage data={guides} session={session}/>
      <UserGuidesBuilder />
    </div>
  )
}