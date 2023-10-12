"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import { currentArticles } from '../../data/articles.data'

export default function SplitChecks() {
  return(
    <div id="articleContainer">
      <ArticleHeader title={currentArticles.data.articles[7].title} author="Cole Brant" date={currentArticles.data.articles[7].createdAt} />
      <div className='flex'>
        <Walkthrough steps={data.splitChecks.steps} />
        <UseCases list={data.splitChecks.useCases} />
      </div>
    </div>
  )
}