import Navbar from '../components/Navbar'
import HeadPage from '../components/HeadPage'
import Hero from '../components/Hero'
// import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <>
      <HeadPage />
      <main>
        <Navbar />
        <Hero />

        <div className='px-4 py-16 pb-0 mx-auto'>
          <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
            <div className='flex flex-col mb-16 sm:text-center sm:mb-0'>
              <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
                <h1 className='mb-7 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
                  Todos los proyectos
                  <span className='sm:block'> son Open Source</span>
                </h1>
                <p className='text-base text-gray-500 dark:text-gray-300 fmd:text-lg'>
                  El software Open Source es importante para todos, no solo para los
                  programadores, porque permite que muchas más personas logren
                  innovaciones, en comparación con un modelo de código cerrado. El
                  desarrollado es de forma abierta y colaborativa
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4 max-w-xl sm:mx-auto lg:max-w-5xl mb-5'>
          <a
            href='/'
            className='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700'
          >
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Proyectos de la comunidad
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Colabora y crea proyectos junto con la comunidad, crea tu proyecto e invita a nuevos desarrolladores.
            </p>
          </a>

          <a
            href='/'
            className='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700'
          >
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Recursos Gratis
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
             Encuentra información útil, datos, herramientas u librerías gratis para programar.
            </p>
          </a>

          <a
            href='/'
            className='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700'
          >
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Recursos Gratis
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
             Encuentra información útil, datos, herramientas u librerías gratis para programar.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

export default Home
