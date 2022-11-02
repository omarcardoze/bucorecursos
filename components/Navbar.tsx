import Link from 'next/link'
import GitHubButton from 'react-github-btn'

export default function Navbar() {
  return (
    <nav className='w-full bg-transparent'>
      <div className='container mx-auto w-full'>
        <ul className='w-full flex text-3xl md:text-base items-center md:flex flex-row justify-center gap-3 py-5'>
          <li className='text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 cursor-pointer text-base lg:text-lg  md:pt-0 md:ml-5 lg:ml-10'>
            <Link href='/projects'>Proyectos</Link>
          </li>
          <li className='text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400  cursor-pointer text-base lg:text-lg md:pt-0 md:ml-5 lg:ml-10'>
            <Link href='/resources'>Recursos</Link>
          </li>
           <li>
            <GitHubButton href="https://github.com/OmarCardoze/Dir-repo" data-color-scheme="no-preference: light_high_contrast; light: light_high_contrast; dark: dark_high_contrast;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star OmarCardoze/Dir-repo on GitHub">Star</GitHubButton>
          </li>
        </ul>
      </div>
    </nav>
  )
}
