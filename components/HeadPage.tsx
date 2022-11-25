import Head from 'next/head'

const HeadPage = () => {
  return (
    <Head>
      <title>Buco Recursos</title>
      <meta name='description' content='Directorio de recursos para programadores' />
      <meta property='og:title' content='Comunidad de desarrollo en español' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='/opengraph-ops.jpg' />
      <meta property='og:url' content='https://bucorecursos.vercel.app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
export default HeadPage
