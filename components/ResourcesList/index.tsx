import { useRef } from 'react'
import useLimit from '../../hooks/useLimit'
import { Resources } from '../../types'
import ResourcesItem from './ResourcesItem'

interface Props {
  resources: Resources[]
}

export default function ResourcesList({ resources }: Props) {
  const targetRef = useRef<HTMLDivElement>(null)
  const limit = useLimit(targetRef)

  return (
    <section className='container grid grid-cols-400 flex-1 my-20 text-slate-50'>
      {resources.slice(0, limit).map((r) => (
        <ResourcesItem resource={r} key={r.id} />
      ))}
      <div ref={targetRef}></div>
    </section>
  )
}
