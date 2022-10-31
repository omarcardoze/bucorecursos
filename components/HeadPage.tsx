import Head from 'next/head'

const HeadPage = () => {
  return (
    <Head>
      <title>Dir Repo</title>
      <meta
        name='description'
        content='Proyecto que busca potenciar la contribuciones a proyectos open source'
      />
      <meta property="og:title" content="Comunidad de desarrollo en español" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/opengraph-ops.jpg" />
      <meta property="og:url" content="https://dirrepo.vercel.app" />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
export default HeadPage
