import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex fixed top-0 left-0 right-0 justify-around text-xl py-5 h-30 bg-slate-100'>
      <Link
        to='/Quantic-kb'
        className='transition duration-150 ease-out hover:ease-in hover:text-zinc-500'
      >
        Home
      </Link>
      <Link
        to='/knowledge'
        className='transition duration-150 ease-out hover:ease-in hover:text-zinc-500'
      >
        Articles
      </Link>
      <Link
        to='/references'
        className='transition duration-150 ease-out hover:ease-in hover:text-zinc-500'
      >
        Sources
      </Link>
      <Link
        to='/tools'
        className='transition duration-150 ease-out hover:ease-in hover:text-zinc-500'
      >
        Tools
      </Link>
      <SearchBar />
    </nav>
  );
}

function SearchBar() {
  return (
    <div className='flex'>
      <input type='text' placeholder='Search..'></input>
      <button type='submit'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </button>
    </div>
  );
}

export default Navbar;
