"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import { currentArticles } from '../../data/articles.data'
import ImageTabs from '@/components/articleComponents/ImageTabs'
import s1 from '@/public/current/splitChecks/1.jpg'
import s2 from '@/public/current/splitChecks/2.jpg'
import s3 from '@/public/current/splitChecks/3.jpg'
import s4 from '@/public/current/splitChecks/4.jpg'
import s5 from '@/public/current/splitChecks/5.jpg'
import s6 from '@/public/current/splitChecks/6.jpg'
import s7 from '@/public/current/splitChecks/7.jpg'

export default function SplitChecks() {
  const images = [s1, s2, s3, s4, s5, s6, s7]
  return(
    <div id="articleContainer">
      <ArticleHeader title={currentArticles.data.articles[7].title} author="Cole Brant" date={currentArticles.data.articles[7].createdAt} />
      <ImageTabs images={images} />
      <div className='flex'>
        <Walkthrough steps={data.splitChecks.steps} />
        <UseCases list={data.splitChecks.useCases} />
      </div>
    </div>
  )
}