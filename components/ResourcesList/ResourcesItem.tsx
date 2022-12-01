import { Resources } from '../../types'

interface IResourcestemProps {
  resource: Resources
}

export default function ResourcesItem({
  resource: { url, title, description },
}: IResourcestemProps) {
  return (
    <article className='flex flex-col p-3'>
      <a
        href={url}
        className='h-44 block  p-6 bg-white border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
      >
        <h5 className='mb-2 text-2xl tracking-tight text-gray-900 dark:text-white uppercase'>
          {title}
        </h5>
        <p className='font-normal text-gray-700 dark:text-gray-400'>{description}</p>
      </a>
    </article>
  )
}
