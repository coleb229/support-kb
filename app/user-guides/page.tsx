"use server"
import { getServerSession } from "next-auth"

export default async function UserGuides() {
  const session = await getServerSession()
  const name = session?.user?.name
  const firstName = name?.split(" ")[0]
  return (
    <div>
      <h1>Hello {firstName}</h1>
    </div>
  )
}