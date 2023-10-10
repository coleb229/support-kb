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

export const addGuideSuggestion = async (formData: any) => {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  try {
    await prisma.guideSuggestion.create({
      data: {
        title: formData.get('title'),
        content: formData.get('description'),
        author: {
          connect: {
            email: email as string,
          },
        },
      },
    })
    revalidatePath('/guide-suggestions')
  } catch (error) {
    console.error(error)
  }
}

export const getGuideSuggestions = async () => {
  try {
    const guideSuggestions = await prisma.guideSuggestion.findMany({})
    return guideSuggestions
  } catch (error) {
    console.error(error)
  }
}

export const getOwnGuideSuggestions = async () => {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  try {
    const guideSuggestions = await prisma.guideSuggestion.findMany({
      where: {
        author: {
          email: email as string,
        },
      },
    })
    return guideSuggestions
  } catch (error) {
    console.error(error)
  }
}