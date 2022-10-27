import api from '../api'
import ProjectList from '../components/ProjectList'
import { Header } from '../components/Header'
import { Project } from '../types'
import type { GetStaticProps } from 'next'
import { HeadPage } from '../components/HeadPage'
interface Props {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await api.projects.list()
  return {
    props: {
      projects
    }
  }
}

const Projects = ({ projects }: Props) => {
  return (
    <main className='w-auto flex flex-col items-center bg-slate-800'>
    <HeadPage />
    <Header />
    <ProjectList projects={projects}/>
    </main>
  )
}

export default Projects
