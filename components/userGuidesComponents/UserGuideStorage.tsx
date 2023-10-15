'use client'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Walkthrough } from "../articleComponents/Walkthrough"
import { UseCases } from "../articleComponents/UseCases"
import { deleteUserGuide } from "@/lib/actions"

export default function UserGuideStorage({ data, session }: any) {
  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Delete</TableHead>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Guide</TableHead>
            <TableHead>Author</TableHead>
            <TableHead className="text-right">Creation Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((guide: any) => (
            <TableRow key={guide.id}>
              <TableCell className="w-[100px]">
                {session?.user?.email === guide.authorEmail ? (
                  <form action={deleteUserGuide}>
                    <input type="hidden" name="id" value={guide.id} />
                    <button type="submit" className="text-red-500 hover:text-red-300">Delete</button>
                  </form>
                ) : (
                  <p className="">Not Authorized</p>
                )}
              </TableCell>
              <TableCell>{guide.id}</TableCell>
              <TableCell>
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="cursor-pointer">
                    <b>{guide.title}</b>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="flex items-center">
                      <Walkthrough steps={guide.steps} />
                      {guide.uses.length > 0 ? <UseCases list={guide.uses} /> : null}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </TableCell>
              <TableCell>{guide.authorName}</TableCell>
              <TableCell className="text-right">{guide.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}