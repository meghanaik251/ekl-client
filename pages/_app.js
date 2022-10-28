import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import Head from "next/head";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer" 
import FooterBar from "../components/Footer_bar"



function MyApp({ Component, pageProps }) {
  return( 
  <>
  <Head>

<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
</Head>
<Navbar src = "./logo.png" height = "12%" width = "12%"/>
  <Component {...pageProps} />
  <Footer />
  <FooterBar />
  </>)
}

export default MyApp
