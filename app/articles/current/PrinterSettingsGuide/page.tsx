"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import ImageTabs from '@/components/articleComponents/ImageTabs'
import s1 from '@/public/current/printerSettings/1.jpg'
import s2 from '@/public/current/printerSettings/2.jpg'
import s3 from '@/public/current/printerSettings/3.jpg'
import s4 from '@/public/current/printerSettings/4.jpg'
import s5 from '@/public/current/printerSettings/5.jpg'

export default function MealPeriod() {
  return(
    <div id="articleContainer">
      <ArticleHeader title="Printer Settings Guide" author="Cole Brant" date="October 9, 2023" />
      <ImageTabs images={[s1, s2, s3, s4, s5]} />
      <div className='flex'>
        <Walkthrough steps={data.printerSettings.steps} />
        <UseCases list={data.printerSettings.useCases} />
      </div>
    </div>
  )
}