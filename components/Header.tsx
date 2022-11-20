interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <>
      <header className='w-full h-[34rem] bg-gradient-to-r from-violet-800 to-blue-500 flex items-center justify-center flex-col relative'>
        <div className='container z-50'>
          <h1 className='text-white text-6xl text-center'>{title}</h1>
        </div>
      </header>
    </>
  )
}
