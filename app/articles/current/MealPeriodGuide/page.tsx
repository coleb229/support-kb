"use client"
import { mealSteps } from './data/data'
import { Walkthrough } from '@/components/Walkthrough'

export default function MealPeriod() {
  return(
    <div id="articleContainer">
      <Walkthrough steps={mealSteps} />
    </div>
  )
}