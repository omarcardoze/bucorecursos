import { Navbar } from './NavBar'

interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <>
      <header className='w-full h-[30rem] bg-gradient-to-r from-violet-800 to-blue-500 flex items-center justify-center flex-col relative'>
        <Navbar />
        <div className='container'>
          <h1 className='text-white text-3xl font-medium text-center'>{title}</h1>
        </div>
      </header>
    </>
  )
}
