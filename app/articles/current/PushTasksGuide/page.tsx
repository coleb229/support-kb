"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import ImageTabs from '@/components/articleComponents/ImageTabs'
import s1 from '@/public/current/pushTasks/1.png'
import s2 from '@/public/current/pushTasks/2.png'
import s3 from '@/public/current/pushTasks/3.png'
import s4 from '@/public/current/pushTasks/4.png'
import s5 from '@/public/current/pushTasks/5.png'
import s6 from '@/public/current/pushTasks/6.png'
import s7 from '@/public/current/pushTasks/7.png'
import s8 from '@/public/current/pushTasks/8.png'
import s9 from '@/public/current/pushTasks/9.png'
import s10 from '@/public/current/pushTasks/10.png'
import s12 from '@/public/current/pushTasks/12.png'
import s13 from '@/public/current/pushTasks/13.png'
import s14 from '@/public/current/pushTasks/14.png'
import s15 from '@/public/current/pushTasks/15.png'

export default function MealPeriod() {
  return(
    <div id="articleContainer">
      <ArticleHeader title="Push Task Guide" author="Cole Brant" date="October 21, 2023" />
      <ImageTabs images={[s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s12, s13, s14, s15]} />
      <div className='flex'>
        <Walkthrough steps={data.pushTasks.steps} />
        <UseCases list={data.pushTasks.useCases} />
      </div>
    </div>
  )
}