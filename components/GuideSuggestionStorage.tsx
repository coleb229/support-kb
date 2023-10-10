"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function GuideSuggestionStorage({ guideSuggestions }:any) {
  return (
    <Table className="bg-slate-50 rounded-lg">
      <TableCaption>Guide Suggestions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Topic</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {guideSuggestions.map((guideSuggestion:any) => (
          <TableRow key={guideSuggestion.id}>
            <TableCell>{guideSuggestion.title}</TableCell>
            <TableCell>{guideSuggestion.content}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}