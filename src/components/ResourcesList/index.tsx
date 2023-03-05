// eslint-disable-next-line @typescript-eslint/key-spacing
import { useRef } from 'react'
import useLimit from '../../../src/hooks/useLimit'
import { type Resources } from '../../../types'
import ResourcesItem from './ResourcesItem'

interface Props {
  resources: Resources[]
}

export default function ResourcesList({ resources }: Props) {
  const targetRef = useRef<HTMLDivElement>(null)
  const limit = useLimit(targetRef)

  return (
    <section className='container grid gap-5 grid-cols-400 flex-1 my-20'>
      {resources.slice(0, limit).map((r) => (
        <ResourcesItem resource={r} key={r.id} />
      ))}
      <div ref={targetRef}></div>
    </section>
  )
}
