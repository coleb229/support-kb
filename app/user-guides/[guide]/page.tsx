import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import { SettingsKey } from '@/components/articleComponents/SettingsKey'
import ImageTabs from '@/components/articleComponents/ImageTabs'
import prisma from '@/lib/prisma'

export default async function MealPeriod({ params } : { params: {guide: string}}) {
  console.log(params.guide)
  const guide = await prisma.userGuide.findUnique({
    where: {
      id: params.guide
    }
  })
  console.log(guide)

  return(
    <div id="articleContainer">
      <ArticleHeader title={guide?.title} author={guide?.authorName} date={guide?.createdAt} />
      <div className='flex'>
        <div className='w-full'>
          <Walkthrough steps={guide?.steps} />
          <UseCases list={guide?.uses} />
        </div>
      </div>
    </div>
  )
}