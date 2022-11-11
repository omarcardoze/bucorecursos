import useLimit from '../../hooks/useLimit'
import ProjectItem from './ProjectItem'
import { Project } from '../../types'
import { useRef } from 'react'
interface Props {
  projects: Project[]
}

export default function ProjectList({ projects }: Props) {
  const targetRef = useRef<HTMLDivElement>(null)
  const limit = useLimit(targetRef)

  return (
    <section className='w-auto container grid grid-cols-400 flex-1 my-20 text-slate-50'>
      {projects.slice(0, limit).map((p) => (
        <ProjectItem project={p} key={p.url} />
      ))}
      <div ref={targetRef}></div>
    </section>
  )
}
