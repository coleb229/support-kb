'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { newUser } from '@/lib/actions'

export default async function Profile() {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  const name = session?.user?.name

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1>Profile</h1>
          <p className=''>Email: {email}</p>
          <p className='mb-20'>Name: {name}</p>
          <form action={newUser}>
            <input type="text" name="email" id="email" value={email as string} hidden />
            <input type="text" name="name" id="name" value={name as string} hidden />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add User
            </button>
          </form>
        </main>
      </body>
    </html>
  )
}