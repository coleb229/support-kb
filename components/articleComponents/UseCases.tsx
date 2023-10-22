'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const UseCases = ({title, list}:any) => {
  return (
    <>
      <Card className="h-fit mx-2 my-2">
        <CardHeader>
          {title ? <CardTitle>{title}</CardTitle> : <CardTitle>Use Cases</CardTitle>}
          <CardDescription>Different ways this feature can be used</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {list.map((item:any) => (
              <li>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  )
}