"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import ImageTabs from '@/components/articleComponents/ImageTabs'
import s1 from '@/public/current/ecommerce/1.png'
import s2 from '@/public/current/ecommerce/2.png'
import s3 from '@/public/current/ecommerce/3.png'
import s4 from '@/public/current/ecommerce/4.png'
import s5 from '@/public/current/ecommerce/5.png'
import s6 from '@/public/current/ecommerce/6.png'
import s7 from '@/public/current/ecommerce/7.png'
import s8 from '@/public/current/ecommerce/8.png'
import s9 from '@/public/current/ecommerce/9.png'
import s10 from '@/public/current/ecommerce/10.png'
import s11 from '@/public/current/ecommerce/11.png'

export default function MealPeriod() {
  return(
    <div id="articleContainer">
      <ArticleHeader title="Ecommerce Settings Guide" author="Cole Brant" date="October 9, 2023" />
      <ImageTabs images={[s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11]} />
      <div className='flex'>
        <Walkthrough steps={data.ecommerceSettings.steps} />
        <UseCases list={data.ecommerceSettings.useCases} />
      </div>
    </div>
  )
}