"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import { currentArticles } from '../../data/articles.data'
import ImageTabs from '@/components/articleComponents/ImageTabs'
import s1 from '@/public/current/digitalSignage/1.png'
import s2 from '@/public/current/digitalSignage/2.png'
import s3 from '@/public/current/digitalSignage/3.png'
import s4 from '@/public/current/digitalSignage/4.png'
import s5 from '@/public/current/digitalSignage/5.png'
import s6 from '@/public/current/digitalSignage/6.png'
import s7 from '@/public/current/digitalSignage/7.png'

export default function MealPeriod() {
  const images = [s1, s2, s3, s4, s5, s6, s7]
  return(
    <div id="articleContainer">
      <ArticleHeader title={currentArticles.data.articles[9].title} author="Cole Brant" date={currentArticles.data.articles[9].createdAt} />
      <ImageTabs images={images} />
      <div className='flex'>
        <Walkthrough steps={data.digitalSignage.steps} />
        <UseCases list={data.digitalSignage.useCases} />
      </div>
    </div>
  )
}