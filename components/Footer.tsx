import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-full h-24 flex justify-center items-center'>
      <div className='contaiener'>
        <Link href='https://github.com/OmarCardoze/Dir-repo'>
          Haz tu contribución 🚀
        </Link>
      </div>
    </footer>
  )
}
