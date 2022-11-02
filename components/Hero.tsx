import { FaTelegramPlane, FaDiscord } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className='h-screen grid place-content-center bg-gray-100 dark:bg-gray-900'>
      <div className='container mx-auto flex flex-col items-center py-12 sm:py-24'>
        <div
          className='w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <h1 className='font-black bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-7 md:leading-10'>
            Dir Repo
          </h1>
          <p className='mt-5 sm:mt-10 lg:w-10/12 text-gray-500 dark:text-gray-300 font-normal text-center text-sm sm:text-lg'>
            Comunidad en español que tiene como objetivo buscar, compartir y
            colaborar en proyectos <span className='font-bold'>open source</span>.
          </p>
        </div>

        <div
          className='flex justify-center items-center'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='300'
        >
          <a
            target='_blank'
            href='https://discord.gg/rXsh9Fwz'
            rel='noopener noreferrer'
            className='flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm'
          >
            <FaDiscord className='mr-2' />
            Discord
          </a>

          <a
            target='_blank'
            href='https://t.me/opensourcees'
            rel='noopener noreferrer'
            className='flex
              justify-center
              items-center ml-4
              focus:outline-none focus:ring-2
              focus:ring-offset-2
              duration-150 ease-in-out
              focus:bg-sky-600
              bg-sky-700 transition
              hover:border-sky-500 lg:text-xl lg:font-bold
              hover:bg-sky-400
              rounded border
              border-sky-600
              text-white
              px-4 sm:px-10 py-2 sm:py-4 text-sm'
          >
            <FaTelegramPlane className='mr-2' />
            Telegram
          </a>
        </div>
      </div>
    </div>
  )
}
