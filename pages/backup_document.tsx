import Document, { Html, Head, Main, NextScript } from 'next/document'
import { DocumentContext } from "next/dist/next-server/lib/utils";

export default class MyDocument extends Document {
    static async getInitialProps(context: DocumentContext) {
        const initalProps = await Document.getInitialProps(context)
        return {...initalProps}
    }

    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}