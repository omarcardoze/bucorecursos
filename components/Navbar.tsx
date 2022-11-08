import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='w-full bg-transparent'>
      <div className='container mx-auto w-full'>
        <ul className='w-full flex text-3xl md:text-base items-center md:flex flex-row justify-center gap-16 py-5'>
          <li className='text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 cursor-pointer text-base'>
            <Link href='/projects'>Proyectos</Link>
          </li>
          <li className='text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400  cursor-pointer text-base'>
            <Link href='/resources'>Recursos</Link>
          </li>
          <li>
            <a href='https://github.com/OmarCardoze/Dir-repo'>
              <Image
                width={82}
                height={20}
                alt='GitHub Repo stars'
                src='https://img.shields.io/github/stars/OmarCardoze/Dir-repo?style=social'
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
