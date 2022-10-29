import RepoIcon from '../Icons/RepoIcon'
import { LanguajeByColor } from '../../utils/LanguajeByColor'
import { Project } from '../../types'

interface IProjectItemProps {
  project: Project
}

export default function ProjectItem({
  project: { url, title, languaje, description },
}: IProjectItemProps) {
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
        <p className='mt-4'>
          {LanguajeByColor(languaje)}
          {languaje}
        </p>
      </div>
    </article>
  )
}
