import {AppProps} from "next/app"
import '../styles/globals.scss'
import {Layout} from "../components/Layout";

export default function App({Component, pageProps}: AppProps) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>

}