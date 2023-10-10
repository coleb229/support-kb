"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'

export default function MealPeriod() {
  return(
    <div id="articleContainer">
      <ArticleHeader title="Tiered Loyalty Guide" author="Cole Brant" date="October 9, 2023" />
      <div className='flex'>
        <Walkthrough steps={data.tieredLoyaltySteps} />
        <UseCases list={data.tieredLoyaltyUseCases} />
      </div>
    </div>
  )
}