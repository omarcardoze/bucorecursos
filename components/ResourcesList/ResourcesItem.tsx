// eslint-disable-next-line @typescript-eslint/key-spacing
import { type Resources } from '../../types'
import Link from 'next/link'

interface IResourcestemProps {
  resource: Resources
}

export default function ResourcesItem({
  resource: { url, title, description },
}: IResourcestemProps) {
  return (
    <Link
      className='relative border h-full p-6 transition-all rounded-lg hover:scale-105 hover:bg-yellow-50 shadow-box'
      rel='noreferrer'
      target='_blank'
      href={url}
    >
      <article className='flex flex-col justify-center gap-y-4'>
        <h2 className='text-xl text-black uppercase font-bold md:text-2xl'>
          {title}
        </h2>
        <p className='text-black text-lg'>{description}</p>
      </article>
    </Link>
  )
}
