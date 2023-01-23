import '@/styles/globals.css'
import { Router } from 'next/router';
import { useEffect, useState } from 'react'
import { Play } from '@next/font/google'
import Loader from '@/components/Loader';
const play = Play({ subsets: ['latin', 'cyrillic', 'cyrillic-ext'], weight: ['400', '700'] })
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    }
    const end = () => {
      setLoading(false);
    }
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    }
  }, []);
  return (
    <main className={play.className}>
      {loading ? (
        <Loader />
      ) :
        <Component {...pageProps} />
      }
    </main>
  )
}
