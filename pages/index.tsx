import Link from 'next/link'
import { Footer } from '../components/Footer'
import { HeadPage } from '../components/HeadPage'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <main>
     <section className='w-auto h-screen flex flex-col items-center bg-orange-600 justify-center'>
       <HeadPage />
     <Navbar />

     {/* SVG generado en https://getwaves.io/ */}
    <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 z-0' viewBox="0 0 1440 320">
      <path fill="#5000ca" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,154.7C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
      </path>
    </svg>

     <h1 className='text-white text-8xl text-center'>Dir Repo</h1>
     <p className='text-white text-center text-2xl p-5'>Comunidad en español que busca compartir y colaborar en proyectos.</p>

    <div className='mt-8'>
       <a href='https://discord.gg/rXsh9Fwz' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4 cursor-pointer'>
        Únete a Discord
       </a>
      <a href='https://t.me/opensourcees' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer'>
        Únete a Telegram
      </a>
    </div>
     </section>

    <section className='w-full h-96 flex justify-center bg-cyan-900'>
     <div className='container w-full h-auto flex justify-center items-center'>
       <p className='text-white md:text-4xl text-xl md:px-10 text-center'>El software Open Source es importante para todos, no solo para los programadores, porque permite que muchas más personas logren innovaciones, en comparación con un modelo de código cerrado. El desarrollado es de forma abierta y colaborativa.</p>
     </div>
    </section>

    <section className='w-full h-[32rem] bg-slate-400 flex justify-center items-center'>
      <div className='w-full h-auto container grid grid-cols-400 justify-center items-center gap-5'>
        <Link href='/projects'>
          <article className='w-80 h-80 py-10 grid place-content-center cursor-pointer bg-sky-800'>
            <h2 className='text-white text-4xl text-center'>Proyectos de la comunidad</h2>
        </article>
        </Link>

        <Link href='/'>
          <article className='lg:w-80 lg:h-80 w-36 h-36  grid place-content-center cursor-pointer bg-sky-800'>
            <h2 className='text-white text-4xl text-center'>Recursos Gratis</h2>
          </article>
        </Link>
      </div>
    </section>
    <Footer />
  </main>
  )
}

export default Home
