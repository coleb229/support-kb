export const ArticleHeader = ({ title, author, date }:any) => {
  return (
    <div className="article-header text-right">
        <div className="article-header__title">
            <h1>{title}</h1>
        </div>
        <div className="article-header__author">
            <p>By {author}</p>
        </div>
        <div className="article-header__date">
            <p>{date}</p>
        </div>
    </div>
  )
}