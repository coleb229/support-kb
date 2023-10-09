let count = 0

const PageNav = (props) => {
  const links = props.links

  return (
    <div className='ml-2 fixed top-32 bg-slate-300 rounded min-w-[300px]'>
      <ul className='text-left'>
        <li className='border-b-[1px] mx-4 pt-2'>
          <a
            className='transition duration-150 ml-0 ease-out hover:ease-in hover:ml-2 hover:text-slate-500'
            href='#top'
          >
            References
          </a>
        </li>
        {links.map((li) => {
          return (
            <li className='border-b-[1px] mx-4 pt-2'>
              <a
                className='transition duration-150 ml-0 ease-out hover:ease-in hover:ml-2 hover:text-slate-500'
                href={'#' + li[0]}
              >
                {li[1]}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const DevicesPageNav = (props) => {
  const links = props.links
  const subLinks = props.sublinks

  return (
    <div className='ml-2 sticky top-32 bg-slate-300 rounded min-w-[300px]'>
      <ul className='text-left'>
        <li className='border-b-[1px] mx-4 pt-2'>
          <a
            className='transition duration-150 ml-0 ease-out hover:ease-in hover:ml-2 hover:text-slate-500'
            href='#top'
          >
            References
          </a>
        </li>
        {links.map((li) => {
          return (
            <li className='border-b-[1px] mx-4 pt-2'>
              <button onClick={dropdown}>{li[1]}</button>
              <div id={count} className='h-0'>
                {subLinks.map((i) => {
                  return (
                    <li className='border-b-[1px] mx-6 pt-2'>
                      <a href={i[0]}>{i[1]}</a>
                    </li>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const dropdown = () => {
  const linkDiv = document.getElementById({ count })

  if (linkDiv.classList.contains('h-auto')) {
    linkDiv.classList.replace('h-auto', 'h-0')
  } else {
    linkDiv.classList.replace('h-0', 'h-auto')
  }
}

export default PageNav
