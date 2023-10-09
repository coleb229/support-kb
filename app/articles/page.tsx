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
          title: "Error Code Guide",
          page: 'errorCodes',
          createdAt: "02/22/2023",
          updated_at: "2021-08-01T12:00:00.000Z",
        },
        {
          id: 2,
          title: "Technical Support Guide",
          page: 'technicalSupport',
          createdAt: "03/03/2023",
          updated_at: "2021-08-01T12:00:00.000Z",
        },
        {
          id: 3,
          title: "Supported Devices Guide",
          page: 'supportedDevices',
          createdAt: "03/05/2023",
          updated_at: "2021-08-01T12:00:00.000Z",
        },
        {
          id: 4,
          title: "Hardware Setup Guide",
          page: 'installsGuide',
          createdAt: "03/07/2023",
          updated_at: "2021-08-01T12:00:00.000Z",
        },
        {
          id: 5,
          title: "Optional Hardware Setup Guide",
          page: 'optionalHardwareGuide',
          createdAt: "03/07/2023",
          updated_at: "2021-08-01T12:00:00.000Z",
        },
      ],
    }
  }
  let i = 0

  return (
    <Table className="w-1/2 bg-slate-50 mx-auto my-10">
      <TableCaption>Legacy Guide Table</TableCaption>
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
              <TableCell>
                {article.createdAt}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}