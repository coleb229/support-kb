"use client"
import { data } from '../data/data'
import { currentArticles } from '../../data/articles.data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import OtherSources from '@/components/articleComponents/OtherSources'
import ImageTabs from '@/components/articleComponents/ImageTabs'
import s1 from '@/public/current/promotions/1.png'
import s2 from '@/public/current/promotions/2.png'
import s3 from '@/public/current/promotions/3.png'
import s4 from '@/public/current/promotions/4.png'
import s5 from '@/public/current/promotions/5.png'
import s6 from '@/public/current/promotions/6.png'
import s7 from '@/public/current/promotions/7.png'

export default function Article() {
  const images = [s1, s2, s3, s4, s5, s6, s7]

  return(
    <div id="articleContainer">
      <ArticleHeader title={currentArticles.data.articles[8].title} author="Cole Brant" date={currentArticles.data.articles[8].createdAt} />
      <ImageTabs images={images} />
      <div className='flex'>
        <Walkthrough steps={data.promotions.steps} />
        <div className='flex flex-col mx-auto justify-around'>
          <UseCases list={data.promotions.useCases} />
          <OtherSources otherSource={data.promotions.otherSources} />
        </div>
      </div>
    </div>
  )
}