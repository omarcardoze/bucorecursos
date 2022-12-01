import { Navbar } from './NavBar'

interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <>
      <header className='container w-full h-[20rem] flex items-center justify-center flex-col relative'>
        <Navbar />
        <h1 className='text-center py-5 leading-tight tracking-tight text-4xl'>
          {title}
        </h1>
      </header>
    </>
  )
}
