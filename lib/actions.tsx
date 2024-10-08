"use server"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { revalidatePath } from 'next/cache'
import prisma from './prisma'
import { v2 as cloudinary } from 'cloudinary'

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

export const addUserGuide = async (formData: any) => {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  try {
    await prisma.userGuide.create({
      data: {
        title: formData.get('title'),
        steps: formData.get('steps').split('\n').map((step: string) => step.trim()),
        uses: formData.get('uses').split('\n').map((use: string) => use.trim()),
        createdAt: new Date().toISOString(),
        author: {
          connect: {
            email: email as string,
          },
        },
        authorName: session?.user?.name as string,
        authorEmail: email as string,
      },
    })
    revalidatePath('/user-guides')
  } catch (error) {
    console.error(error)
  }
}

export const getUserGuides = async () => {
  try {
    const userGuides = await prisma.userGuide.findMany({})
    return userGuides
  } catch (error) {
    console.error(error)
  }
}

export const deleteUserGuide = async (formData: any) => {
  try {
    await prisma.userGuide.delete({
      where: {
        id: formData.get('id'),
      },
    })
    revalidatePath('/user-guides')
  } catch (error) {
    console.error(error)
  }
}

export const uploadUserImage = async (formData: any) => {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  try {
    await prisma.userGuideImage.create({
      data: {
        publicId: formData.get('publicId'),
        format: formData.get('format'),
        version: formData.get('version'),
      }
    })
    revalidatePath('/user-guides')
  } catch (error) {
    console.error(error)
  }
}

// Cloudinary Start
const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})

export async function getSignature() {
  const timestamp = Math.round(new Date().getTime() / 1000)

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: 'next' },
    cloudinaryConfig.api_secret as string
  )

  return { timestamp, signature }
}

export async function saveToDatabase({ public_id, version, signature }:any) {
  // verify the data
  try{
    const expectedSignature = cloudinary.utils.api_sign_request(
      { public_id, version },
      cloudinaryConfig.api_secret as string
    )
  
    if (expectedSignature === signature) {
      // safe to write to database
      console.log({ public_id })
    }
  } catch (error) {
    console.error(error)
  }
}
// Cloudinary End