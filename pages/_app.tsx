import '../styles/globals.scss'
import { FirebaseAppProvider } from 'reactfire'
import Head from 'next/head'
import firebase from 'firebase/app'
import NavBar from '../src/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Queue</title>
            </Head>
            {/*@ts-ignore*/}
            <FirebaseAppProvider firebaseApp={firebase.app}>
                <NavBar />
                <Component {...pageProps} />
            </FirebaseAppProvider>
        </>
    )
}