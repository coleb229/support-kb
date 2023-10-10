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


export default function ProfileGuideSuggestion({ posts }:any) {
  return (
    <div>
      <Collapsible>
        <CollapsibleTrigger>User Suggested Guides</CollapsibleTrigger>
        <hr />
        <CollapsibleContent>
        <Table>
          <TableCaption>A list of your guide suggestion posts</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Suggestion Title</TableHead>
              <TableHead>Suggestion Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post:any) => (
              <TableRow>
                <TableCell key={post.id}>{post.id}</TableCell>
                <TableCell key={post.title}>{post.title}</TableCell>
                <TableCell key={post.description}>{post.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}