import { HeadPage } from '../components/HeadPage'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const Home = () => {
  return (
    <main className='w-auto h-screen flex flex-col items-center bg-orange-600 justify-center'>
      <HeadPage />
     <Navbar />

     {/* SVG generado en https://getwaves.io/ */}
    <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 z-0' viewBox="0 0 1440 320">
      <path fill="#5000ca" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,139,720,154.7C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
      </path>
    </svg>

     <h1 className='text-white text-3xl text-center'>Únete y comparte tus proyectos</h1>
     <Link href="/projects">
        <a className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-5'>Explorar Proyectos</a>
     </Link>
    </main>
  )
}

export default Home
