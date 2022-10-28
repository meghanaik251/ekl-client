import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return( 
  <>
  <Head>

<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
</Head>
  <Component {...pageProps} />
  </>)
}

export default MyApp
