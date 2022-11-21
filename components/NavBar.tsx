export const Navbar = () => {
  return (
    <nav className='w-full flex justify-center px-2 sm:px-4 py-2.5 bg-transparent absolute top-0'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='https://flowbite.com/' className='flex items-center'>
          {/* <img
            src='#'
            className='h-6 mr-3 sm:h-9'
            alt='Logo'
          /> */}
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Devshare
          </span>
        </a>

        <div>
          <ul className='flex flex-col p-4'>
            <li>
              <a
                href='https://github.com/OmarCardoze/Dir-repo'
                className='text-white text-xl'
              >
                ☆ Star us on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
