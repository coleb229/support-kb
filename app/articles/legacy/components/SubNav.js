const ReaderNav = (props) => {
  const links = props.links;

  return (
    <div>
      <h1 className='text-center text-xl font-semibold'>{props.header}</h1>
      <ul className='flex justify-around bg-slate-200 w-[80%] mx-auto text-lg rounded mb-10'>
        {links.map((i) => {
          return (
            <li>
              <a
                className='transition duration-150 ml-0 ease-out hover:ease-i hover:text-slate-500'
                href={'#' + i[0]}
              >
                {i[1]}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
