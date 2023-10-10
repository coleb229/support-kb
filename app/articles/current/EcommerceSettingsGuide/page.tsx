"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/Walkthrough'
import { ArticleHeader } from '@/components/ArticleHeader'

export default function MealPeriod() {
  return(
    <div id="articleContainer">
      <ArticleHeader title="Ecommerce Settings Guide" author="Cole Brant" date="October 9, 2023" />
      <Walkthrough steps={data.ecommerceSettingsSteps} />
    </div>
  )
}