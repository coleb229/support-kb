'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const SettingsKey = ({title, list}:any) => {

  return (
    <>
      <Card className="w-5/6 h-fit mx-2 my-2">
        <CardHeader>
          {title ? <CardTitle>{title}</CardTitle> : <CardTitle>Use Cases</CardTitle>}
          <CardDescription>View settings definitions for this feature below.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
          {list.map((item:any) => {
            if (item.includes(':')) {
              const splitItem = item.split(':')
              item = <><b>{splitItem[0]}:</b> {splitItem[1]}</>
            }
            return <li>{item}</li>
          })}            
          </ul>
        </CardContent>
      </Card>
    </>
  )
}