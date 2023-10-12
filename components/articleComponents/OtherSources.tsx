import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function OtherSources ({ otherSource }:any) {
  return (
    <div className="bg-white p-6 rounded-2xl mx-auto w-2/3">
      <h1 className="text-xl pb-2 text-center">Other Resources</h1>
      <hr className="mx-auto border-black" />
      <Table>
        <TableCaption>Other Resources</TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-100">
            <TableHead>Title</TableHead>
            <TableHead>Link</TableHead>
            <TableHead className="text-right">Source</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {otherSource.map((source:any) => (
            <TableRow>
              <TableCell>{source.title}</TableCell>
              <TableCell>
                <a href={source.link} target="_blank" className="text-cyan-400 hover:text-cyan-300">{source.link}</a>
              </TableCell>
              <TableCell className="text-right">{source.source}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}