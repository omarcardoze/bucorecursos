import api from '../../api'
import type { GetStaticProps } from 'next'
import { type Resources } from '../../types'
import { Header } from '../components/Header'
import ResourcesList from '../components/ResourcesList'
import { Footer } from '../components/Footer'
import HeadPage from '../components/HeadPage'

interface Props {
  randomResourses: Resources[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resources = await api.resources.list()
  const randomResourses = resources.sort(() => Math.random() - 0.5)
  return {
    props: {
      randomResourses,
    },
  }
}

const ResourcesPage = ({ randomResourses }: Props) => {
  return (
    <>
      <Header title='Recopilación de recursos gratuitos' />
      <div className='container mx-auto flex flex-col items-center bg-white'>
        <HeadPage />
        <ResourcesList resources={randomResourses} />
        <Footer />
      </div>
    </>
  )
}

export default ResourcesPage
