import '../styles/globals.scss'
import { FirebaseAppProvider } from 'reactfire'
import Head from 'next/head'
import NavBar from '../src/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { firebaseConfig } from '../firebaseConfig';

const isProduction = process.env.NODE_ENV === 'production'

export default function MyApp({ Component, pageProps }) {
    const config = isProduction ? firebaseConfig : firebaseConfig
    return (
        <>
            <Head>
                <title>Queue</title>
            </Head>
            <FirebaseAppProvider firebaseConfig={config}>
                <NavBar />
                <Component {...pageProps} />
            </FirebaseAppProvider>
        </>
    )
}