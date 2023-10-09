'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function Profile() {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  const name = session?.user?.name

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1>Profile</h1>
          <p className='mb-20'>Email: {email}</p>
          <p className='mb-20'>Name: {name}</p>
        </main>
      </body>
    </html>
  )
}