import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='w-full border-b dark:border-gray-700'>
      <div className='container mx-auto w-full'>
        <ul className='w-full flex text-3xl md:text-base items-center md:flex flex-row justify-center gap-3 py-5'>
          <li className='text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400  cursor-pointer text-base lg:text-lg md:pt-0'>
            <Link
              href='https://github.com/OmarCardoze/Dir-repo'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </Link>
          </li>
          <li className='text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 cursor-pointer text-base lg:text-lg  md:pt-0 md:ml-5 lg:ml-10'>
            <Link href='/projects'>Proyectos</Link>
          </li>
          <li className='text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400  cursor-pointer text-base lg:text-lg md:pt-0 md:ml-5 lg:ml-10'>
            <Link href='/resources'>Recursos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
