"use client"
import { data } from '../data/data'
import { Walkthrough } from '@/components/articleComponents/Walkthrough'
import { ArticleHeader } from '@/components/articleComponents/ArticleHeader'
import { UseCases } from '@/components/articleComponents/UseCases'
import ImageTabs from '@/components/articleComponents/ImageTabs'
import s1 from '@/public/current/gatewaySetup/1.png'
import s2 from '@/public/current/gatewaySetup/2.png'
import s3 from '@/public/current/gatewaySetup/3.png'
import s4 from '@/public/current/gatewaySetup/4.png'
import { SettingsKey } from '@/components/articleComponents/SettingsKey'

export default function MealPeriod() {
  return(
    <div id="articleContainer">
      <ArticleHeader title="Gateway Setup Guide" author="Cole Brant" date="October 21, 2023" />
      <ImageTabs images={[s1, s2, s3, s4]} />
      <div className='flex'>
        <div className='w-full'>
          <Walkthrough steps={data.gatewaySetup.steps} />
          <UseCases list={data.gatewaySetup.useCases} />
        </div>
        <SettingsKey title="Gateway Setup Settings" list={data.gatewaySetup.settingsKey} />
      </div>
    </div>
  )
}