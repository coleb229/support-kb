"use server"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { revalidatePath } from 'next/cache'
import prisma from './prisma'

export const newUser = async ({formData}:any) => {
  try {
    await prisma.user.create({
      data: {
        email: formData('email'),
        name: formData('name'),
      },
    })
  } catch (error) {
    console.error(error)
  }
}