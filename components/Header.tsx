import Navbar from './Navbar'

export const Header = () => {
  return (
    <>
    <header className='w-full h-[34rem] bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-col relative'>
     <Navbar />
        <div className='container z-50'>
          <h1 className='text-white text-6xl text-center'>Proyectos de la comunidad</h1>
        </div>

     {/* SVG generado en https://getwaves.io/ */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0 z-0'><path fill="#00cba9" fillOpacity="1" d="M0,64L0,224L240,224L240,256L480,256L480,160L720,160L720,224L960,224L960,288L1200,288L1200,64L1440,64L1440,320L1200,320L1200,320L960,320L960,320L720,320L720,320L480,320L480,320L240,320L240,320L0,320L0,320Z"></path></svg>

    </header>
    </>
  )
}
