import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



export default function ArticleTable() {

  const legacyArticles = {
    data: {
      articles: [
        {
          id: 1,
          title: "Technical Support Guide",
          page: 'technicalSupport',
          created_at: "2021-08-01T12:00:00.000Z",
          updated_at: "2021-08-01T12:00:00.000Z",
        },
        {
          id: 2,
          title: "Error Code Guide",
          page: 'errorCodes',
          created_at: "2021-08-01T12:00:00.000Z",
          updated_at: "2021-08-01T12:00:00.000Z",
        },
        {
          id: 3,
          title: "Technical Support Guide",
          page: 'technicalSupport',
          created_at: "2021-08-01T12:00:00.000Z",
          updated_at: "2021-08-01T12:00:00.000Z",
        },
      ],
    }
  }
  let i = 0

  return (
    <Table className="w-1/2 bg-slate-50 mx-auto my-10">
      <TableCaption>A list of your recent invoices.</TableCaption>
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
                <a href={`/articles/${article.page}`}>{article.title}</a>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}