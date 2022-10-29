import 'inter-ui/inter.css'
import '../styles/globals.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
