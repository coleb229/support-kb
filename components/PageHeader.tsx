export const PageHeader = ({title, desc}:any) => {
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-2xl pb-10">{desc}</p>
    </div>
  )
}