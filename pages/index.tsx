import api from '../api'
import type { GetStaticProps } from 'next'
import { Resources } from '../types'
import { Header } from '../components/Header'
import ResourcesList from '../components/ResourcesList'
import { Footer } from '../components/Footer'
import HeadPage from '../components/HeadPage'

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
    <div className='flex flex-col items-center bg-white'>
      <HeadPage />
      <Header title='Recopilación de recursos gratuitos para devs.' />
      <ResourcesList resources={resources} />
      <Footer />
    </div>
  )
}

export default ResourcesPage
