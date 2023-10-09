function ArticleHeader(props) {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-slate-300 text-black font-semibold sticky top-[68px] flex justify-between w-full'>
      <div className='py-4 ml-4'>
        <a className='hover:text-zinc-800' to='/articles'>
          Back to Articles
        </a>
      </div>
      <h1 className='text-3xl text-right mr-5 py-3'>{props.title}</h1>
    </div>
  )
}

export default ArticleHeader
