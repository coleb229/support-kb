"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import { currentArticles } from '../../data/articles.data'

export default function MealPeriod() {
  return(
    <div id="articleContainer">
      <ArticleHeader title={currentArticles.data.articles[9].title} author="Cole Brant" date={currentArticles.data.articles[9].createdAt} />
      <div className='flex'>
        <Walkthrough steps={data.digitalSignage.steps} />
        <UseCases list={data.digitalSignage.useCases} />
      </div>
    </div>
  )
}