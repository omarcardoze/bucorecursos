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

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="dirrepo.vercel.app" />
      <meta property="twitter:url" content="https://dirrepo.vercel.app" />
      <meta name="twitter:title" content="Comunidad de desarrollo en español" />
      <meta name="twitter:description" content="Proyecto que busca potenciar la contribuciones a proyectos open source" />
      <meta name="twitter:image" content="https://dirrepo.vercel.app" />
    </Head>
  )
}
export default HeadPage
