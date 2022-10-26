/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'

export default function Navbar () {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-transparent absolute top-0 w-full z-50">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <Link href='/'>
          <a className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DIRREPO</span>
        </a>
      </Link>
        <div className="hidden w-full md:block md:w-auto">
        <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            <li>
            <a href="https://github.com/OmarCardoze/Dir-repo " target="_blank" rel='noreferrer' className="block py-2 pr-4 pl-3 text-white text-xl">☆ GitHub</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}
