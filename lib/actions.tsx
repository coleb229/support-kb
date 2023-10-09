"use server"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { revalidatePath } from 'next/cache'
import prisma from './prisma'

export const newUser = async () => {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  const name = session?.user?.name

  try {
    await prisma.user.create({
      data: {
        email: email as string,
        name: name as string,
      },
    })
    revalidatePath('/discoveries')
  } catch (error) {
    console.error(error)
  }
}

export const findUser = async () => {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email as string,
      },
    })
    return user
  } catch (error) {
    console.error(error)
  }
}