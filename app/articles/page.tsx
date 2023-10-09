import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { legacyArticles, currentArticles } from "./data/articles.data"

export default function ArticleTables() {
  return (
    <div>
      <CurrentArticleTable />
      <LegacyArticleTable />
    </div>
  )
}

const CurrentArticleTable = () => {
  return (
    <Table className="w-1/2 bg-slate-50 mx-auto my-10">
      <TableCaption>Guide Table</TableCaption>
      <TableHeader className="bg-slate-100">
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Article</TableHead>
          <TableHead>Creation Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          {currentArticles.data.articles.map((article) => (
            <TableRow>
              <TableCell key={article.id}>
                {article.id}
              </TableCell>
              <TableCell>
                <a href={`/articles/current/${article.page}`}>{article.title}</a>
              </TableCell>
              <TableCell>
                {article.createdAt}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

const LegacyArticleTable = () => {

  let i = 0

  return (
    <Table className="w-1/2 bg-slate-50 mx-auto my-10">
      <TableCaption>Legacy Guide Table (**Image imports are not currently working**)</TableCaption>
      <TableHeader className="bg-slate-100">
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Article</TableHead>
          <TableHead>Creation Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          {legacyArticles.data.articles.map((article) => (
            <TableRow>
              <TableCell key={article.id}>
                {article.id}
              </TableCell>
              <TableCell>
                <a href={`/articles/legacy/${article.page}`}>{article.title}</a>
              </TableCell>
              <TableCell>
                {article.createdAt}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}