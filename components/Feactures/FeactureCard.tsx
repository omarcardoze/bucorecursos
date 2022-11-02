import Link from 'next/link'

interface IFeactureCardProps {
  title: string
  content: string
  href: string
}

export default function FeactureCard({
  title,
  content,
  href,
  ...props
}: IFeactureCardProps) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line */}
      <div className='flex justify-center cursor-pointer'>
        <a
          className='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700'
          {...props}
        >
          <p className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </p>
          <p className='font-normal text-gray-700 dark:text-gray-400'>{content}</p>
        </a>
      </div>
    </Link>
  )
}
