import Document, {Head, Html, Main, NextScript} from 'next/document'
import {ReactElement} from "react";
import {Call} from "../components/call/Call";
import {Whatsapp} from "../components/call/Whatsapp";
import {Footer} from "../components/footer/Footer";


class MyDocument extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps((ctx));
        return {...initialProps}
    }
    render():ReactElement{
        return(
            <Html>
                <Head lang="ru"/>
                <body>
                <Main />
                <NextScript />
                <Call />
                <Whatsapp />

                <Footer />
                </body>
            </Html>
        )
    }
}

export default MyDocument;