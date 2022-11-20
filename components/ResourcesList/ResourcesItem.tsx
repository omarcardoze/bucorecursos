import RepoIcon from '../Icons/RepoIcon'
// import { LanguajeByColor } from '../../utils/LanguajeByColor'
import { Resources } from '../../types'

interface IResourcestemProps {
  resource: Resources
}

export default function ResourcesItem({
  resource: { url, title, description },
}: IResourcestemProps) {
  return (
    <article className='flex flex-col p-3 bg'>
      <div className='flex flex-col border rounded px-5 py-4 bg-slate-200 text-black'>
        <a
          href={url}
          className='text-blue-800  hover:underline flex flex-row items-center gap-2'
        >
          <RepoIcon />
          {title}
        </a>
        <p className='mt-4'>{description}</p>
      </div>
    </article>
  )
}
