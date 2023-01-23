import '@/styles/globals.css'
import { Play } from '@next/font/google'
const play = Play({ subsets: ['latin', 'cyrillic', 'cyrillic-ext'], weight: ['400', '700'] })
export default function App({ Component, pageProps }) {
  return (
    <main className={play.className}>
      <Component {...pageProps} />
    </main>
  )
}
