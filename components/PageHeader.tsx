export const PageHeader = ({title}:any) => {
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-2xl pb-10">Search for a knowledge article from the list below.</p>
    </div>
  )
}