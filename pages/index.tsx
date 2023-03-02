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
    <>
      <Header title='Recopilación de recursos gratuitos' />
      <div className='container mx-auto flex flex-col items-center bg-white'>
        <HeadPage />
        <ResourcesList resources={resources} />
        <Footer />
      </div>
    </>
  )
}

export default ResourcesPage
