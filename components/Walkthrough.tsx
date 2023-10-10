export const Walkthrough = ({steps}:any) => {
  return(
    <div className='w-1/2 border-[1px] border-black rounded-lg'>
      <div className='bg-slate-200 rounded-tl-lg rounded-tr-lg'>
        <h1 className='text-xl py-2 ml-4'>Step-by-step Setup Walkthrough</h1>
        <hr className='pb-2' />
      </div>
      <div className='bg-white py-4 rounded-bl-lg rounded-br-lg'>
        <ol className='list-decimal mx-10'>
          {steps.map((step:any) => (
            <li>
              {step}
            </li>
            )) 
          }
        </ol>
      </div>
    </div>
  )
}