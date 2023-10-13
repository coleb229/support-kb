"use client"
'test'
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import ImageTabs from '@/components/articleComponents/ImageTabs'
import s1 from '@/public/current/tieredLoyalty/1.jpg'
import s2 from '@/public/current/tieredLoyalty/2.jpg'
import s3 from '@/public/current/tieredLoyalty/3.jpg'

export default function MealPeriod() {
  const images = [s1, s2, s3]

  return(
    <div id="articleContainer">
      <ArticleHeader title="Tiered Loyalty Guide" author="Cole Brant" date="October 9, 2023" />
      <ImageTabs images={images} />
      <div className='flex'>
        <Walkthrough steps={data.tieredLoyalty.steps} />
        <UseCases list={data.tieredLoyalty.useCases} />
      </div>
    </div>
  )
}