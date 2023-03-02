import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='w-full h-24 flex justify-center items-center'>
      <div className='contaiener'>
        <a href='https://github.com/OmarCardoze/Dir-repo'>
          <Image
            alt='GitHub Repo stars'
            src='https://img.shields.io/github/stars/OmarCardoze/Dir-repo?style=social'
            width={82}
            height={20}
          />
        </a>
      </div>
    </footer>
  )
}
