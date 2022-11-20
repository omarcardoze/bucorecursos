import api from '../api'
import type { GetStaticProps } from 'next'
import { Resources } from '../types'
import { Header } from '../components/Header'
import ResourcesList from '../components/ResourcesList'

interface Props {
  resources: Resources[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resources = await api.resources.list()
  return {
    props: {
      resources,
    },
  }
}

const ResourcesPage = ({ resources }: Props) => {
  return (
    <div className='h-auto w-auto flex flex-col items-center bg-white'>
      <Header title='Recursos gratis' />
      <ResourcesList resources={resources} />
    </div>
  )
}

export default ResourcesPage
