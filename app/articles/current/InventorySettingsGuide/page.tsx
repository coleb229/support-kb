"use client"
import { inventorySetupSteps } from '../data/data'
import { Walkthrough } from '@/components/Walkthrough'

export default function MealPeriod() {
  return(
    <div id="articleContainer">
      <Walkthrough steps={inventorySetupSteps} />
    </div>
  )
}