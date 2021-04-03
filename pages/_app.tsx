import '../styles/globals.css'
import { FirebaseAppProvider } from 'reactfire'

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider>
      <Component {...pageProps} />
    </FirebaseAppProvider>
  )
}

export default MyApp
