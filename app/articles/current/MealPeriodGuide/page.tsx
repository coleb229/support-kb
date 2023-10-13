"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import ImageTabs from '@/components/articleComponents/ImageTabs'
import s1 from '@/public/current/mealPeriod/s1.png'
import s2 from '@/public/current/mealPeriod/s2.png'
import s3 from '@/public/current/mealPeriod/s3.png'
import s4 from '@/public/current/mealPeriod/s4.png'
import s5 from '@/public/current/mealPeriod/s5.png'
import s6 from '@/public/current/mealPeriod/s6.png'


export default function MealPeriod() {
  const images = [s1, s2, s3, s4, s5, s6]

  return(
    <div id="articleContainer">
      <ArticleHeader title="Meal Period Guide" author="Cole Brant" date="October 9, 2023" />
      <ImageTabs images={images} />
      <div className='flex'>
        <Walkthrough steps={data.mealPeriod.steps} />
        <UseCases list={data.mealPeriod.useCases} />
      </div>
    </div>
  )
}