import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { revalidatePath } from 'next/cache'
import { LoginButton, LogoutButton } from '@/components/LoginButtons'
import TopNavbar from '@/components/TopNavbar'
import bg from '../public/background.jpg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Support KB',
  description: 'Internal knowledge base for the support team',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  const firstName = session?.user?.name?.split(' ')[0]

  if(email === undefined) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1>Access Denied</h1>
            <p className='mb-20'>Sorry, you must login with a getquantic email to access this page.</p>
            <LoginButton />
          </main>
        </body>
      </html>
    )
  } else if(email?.includes('@getquantic.com') !== true) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1>Access Denied</h1>
            <p className='mb-20'>Sorry, you must be a Quantic employee to access this page.</p>
            <div className='flex'>
              <LogoutButton />
            </div>
          </main>
        </body>
      </html>
    )
  } else {
      return (
        <html lang="en">
          <body className={inter.className}>
            <TopNavbar session={firstName} />
            {children}
            <div id='viewLogout'>
              <LogoutButton />
            </div>
          </body>
        </html>
      )
  }
}
