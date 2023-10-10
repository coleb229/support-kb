'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { newUser, findUser, getOwnGuideSuggestions } from '@/lib/actions'
import ProfileCard from '@/components/ProfileCard'
import ProfileGuideSuggestion from '@/components/ProfileGuideSuggestion'

export default async function Profile() {
  const session = await getServerSession(authOptions)
  const registered = await findUser()
  const user = await findUser()
  const suggestions = await getOwnGuideSuggestions()

  if (!registered) {
    await newUser()
  }
  console.log(user)

  return (
    <main className="flex min-h-screen flex-col mx-[400px] mt-[200px] p-24">
      <ProfileCard
        name={user?.name}
        email={user?.email}
        id={user?.id}
        createdOn={user?.createdAt}
        updatedOn={user?.updatedAt}
      />
      <ProfileGuideSuggestion posts={suggestions} />
    </main>
  )
}