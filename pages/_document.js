import Document, { Html, Head, Main, NextScript } from 'next/document'

class MydDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render () {
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript/>

            </body>
        </Html>
    }
}

export default MydDocument