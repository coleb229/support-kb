"use client"
import { data } from '../data/data'
import { currentArticles } from '../../data/articles.data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import OtherSources from '@/components/articleComponents/OtherSources'

export default function Article() {
  return(
    <div id="articleContainer">
      <ArticleHeader title={currentArticles.data.articles[8].title} author="Cole Brant" date={currentArticles.data.articles[8].createdAt} />
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