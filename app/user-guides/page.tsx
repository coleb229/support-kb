"use server"
import { getServerSession } from "next-auth"
import UserGuidesBuilderQuick from "@/components/userGuidesComponents/UserGuideBuilderQuick"
import UserGuideStorage from "@/components/userGuidesComponents/UserGuideStorage"
import UserGuideSearch from "@/components/userGuidesComponents/UserGuideSearch"
import { getUserGuides } from "@/lib/actions"

export default async function UserGuides() {
  const session = await getServerSession()
  const name = session?.user?.name
  const guides = await getUserGuides()

  return (
    <div id="container">
      <div className="flex flex-col">
        <UserGuideSearch guides={guides} />
        <UserGuidesBuilderQuick />
      </div>
    </div>
  )
}