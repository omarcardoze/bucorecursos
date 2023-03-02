import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className='container w-full flex justify-center px-2 sm:px-4 py-2.5 bg-transparent absolute top-0'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='https://bucorecursos.vercel.app/' className='flex items-center'>
          <Image
            src='/logo.svg'
            className='mr-3 sm:h-14'
            width={35}
            height={35}
            alt='Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap text-black'>
            Buco Recursos
          </span>
        </a>

        <div>
          <ul className='flex flex-col p-4'>
            <li>
              <a
                href='https://github.com/OmarCardoze/Dir-repo'
                className='text-black text-xl'
              >
                ☆ GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
