'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { newUser, findUser } from '@/lib/actions'
import { AddUser } from '@/components/LoginButtons'

export default async function Profile() {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  const name = session?.user?.name
  const registered = await findUser()

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1>Profile</h1>
          <p className=''>Email: {email}</p>
          <p className='mb-20'>Name: {name}</p>
          {registered ? <p className='mb-20'>You are registered!</p> : <AddUser />}
        </main>
      </body>
    </html>
  )
}